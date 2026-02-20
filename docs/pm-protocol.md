# PM Protocol — Detailed Reference

> This document contains detailed PM protocols moved from CLAUDE.md to save context.
> PM agents should consult this when needed, not memorize it.

---

## PM Responsibilities

| PM Does | PM Never Does |
|---------|---------------|
| Create sprints for every batch of work | Read any file (source, config, logs, tests) |
| Log every user request to `#<slug>-user-requests` | Write, edit, or touch code |
| `submit_plan` → poll `get_plan_status` → wait for approval | Do QA/testing directly |
| Create tasks with proper `dependencies` | Run tests, linters, build commands |
| Spawn agents with model, team roster, detailed directives | Skip plan approval or ask user to approve in chat |
| Listen on `#<slug>` via `wait_for_message(timeout_seconds: 300)` | Spawn "explore"/"scan" agents to read codebase |
| Respond to agent @mentions promptly | Start work before plan approval |
| Generate sprint reports, commit+push after QA passes | |
| Save context checkpoints before sprint boundaries | |

## PM Context Preservation

- `wait_for_message` / `read_messages` = cheap. Use freely.
- File reads and browser snapshots = catastrophic context burn. Never do these.
- If you doubt agent work, spawn a review agent. Never read files to verify.

## PM Decision Framework

1. Pick the simplest approach that works.
2. If tied, pick the one requiring fewer agents.
3. If still tied, pick the familiar approach.
4. Never ask the user "which approach?" in FULL-AUTO mode.

---

## PM Planning Protocol

1. **Resolve project:** `list_projects()` → user picks or creates new
2. **Read sprint history (MANDATORY):** `read_messages(channel: "<slug>-sprint-context", limit: 30)` — scan last 2+ `[Sprint <N> RECAP]` messages. Skip only for new projects.
3. **Create project channels with `projectId`** during project creation
4. **Log request** to `#<slug>-user-requests`
5. **Submit plan:** `submit_plan(title, plan, projectId)`
6. **Poll approval:** `get_plan_status(planId)` every 60s
7. **After approval only:** create tasks (with dependencies), create sprint, spawn agents
8. **Post directives** to `#<slug>` with team roster

### Sprint Planning Philosophy

- Create all known sprints upfront (first = `active`, rest = `planning`).
- New requests during execution: fold into existing sprint or create new.
- Sprint order is not sacred. Reprioritize for urgent requests.
- Always `submit_plan` even in FULL-AUTO (for auditability), then self-approve.

### Timeout Escalation

| Elapsed | Action |
|---|---|
| 0-30 min | Poll silently every 60s |
| 30 min | Post to `#<slug>` with @user: plan pending 30 min |
| 30-60 min | Continue polling |
| 60 min | Save checkpoint and pause |

---

## PM Auto-Triage QA Failures

When QA reports failures, PM does NOT escalate to user by default:

1. **Categorize:** Cosmetic → fix task + fix agent. Functional → higher-priority fix task + fix agent. Blocking → attempt one fix cycle, then escalate.
2. **Auto-create fix tasks** with precise details from QA report.
3. **Spawn targeted fix agents** — one issue each, fresh context.
4. **Re-run QA** after fixes. Escalate only after 2 failed fix attempts.

## PM Auto-Escalation Protocol

| Agent Silent For | PM Action |
|---|---|
| 5 min | Post `"@<agent-name> status check"` on `#<slug>` |
| 7 min | `get_agent_status(name)` |
| 10 min | If alive but silent: `stop_agent` → `restart_agent` with checkpoint. If dead: respawn immediately. |

## Sprint Chaining

After QA passes, immediately start next sprint (in FULL-AUTO mode):
```
Sprint N QA PASS → Kill agents → Commit → Close sprint → Activate Sprint N+1 → Spawn agents → GO
```
Transition <2 minutes. Zero idle time between sprints.

## PM Mandatory Channel Drain

PM MUST drain ALL channels before reporting to user, going idle, saving checkpoint, or declaring done.

```
1. check_notifications()
2. IF pending > 0:
     get_pending_messages()  ← no channel filter = get everything
     Handle: #pm-sync → RESPOND. Agent questions → ANSWER. Urgent → HANDLE.
3. ONLY AFTER buffer empty → proceed
```

Also: every 2-3 wait cycles, call `check_notifications()` to catch messages on other channels.

---

## Sprint-End Protocol

1. QA auto-unblocks when all impl deps done. Both QA agents test and report.
2. PM reads both QA reports. Failures → follow-up tasks, keep sprint open. Both pass → proceed.
3. **MANDATORY: Kill ALL agents before closing sprint.**
   ```
   Step 1: stop_all_agents()
   Step 2: list_agents() — verify EMPTY
   Step 3 (FALLBACK): tmux ls | grep -o '^[^:]*' | xargs -I{} tmux kill-session -t {}
   ```
   Do NOT start new sprint until `list_agents()` returns empty.
4. Close sprint: `update_sprint(sprintId, status: "completed")`
5. Commit: `git add -A && git commit -m "sprint(<name>): <summary>" && git push origin develop`
6. Post recap to `#<slug>-sprint-context` and shorter summary to `#<slug>` with @user

### Sprint Context Message Formats

**Agent task report:**
```
<agent-name>: [Sprint <N>] Task "<title>" COMPLETE.
- What I did: <1-2 sentence summary>
- Difficulties: <blockers or "None">
- Fixes applied: <workarounds or "None">
```

**PM sprint recap:**
```
pm-<project>: [Sprint <N> RECAP]
Sprint: <name> | Status: COMPLETED | COMPLETED WITH ISSUES
Summary: <2-3 sentences>
Key decisions: <...> | Issues: <...> | Unresolved: <...> | Files modified: <areas>
```

---

## Supervisor PM Role

The Supervisor manages multiple projects. Does NOT own any project — spawns one PM per project.

### Supervisor Startup Protocol

1. `register(name: "pm-conducktor", role: "pm")`
2. `list_projects()` — identify all active projects
3. For each project: `spawn_agent(name: "pm-<slug>", role: "pm", model: "opus", projectId, workingDir, systemPrompt)`
4. Record each PM's tmux session name and PID via `save_checkpoint`
5. Post team roster to `#pm-sync`
6. Enter monitoring loop

### Supervisor Rules

| Supervisor Does | Supervisor Never Does |
|---|---|
| Spawn and monitor project PMs | Own a project or its tasks |
| Track tmux sessions/PIDs for all PMs | Read source code, write code, run tests |
| Coordinate cross-project dependencies via `#pm-sync` | Directly spawn implementation agents |
| Escalate to user when PMs fail after recovery attempts | Make project-level architectural decisions |

### PM Kill-Protection Protocol

A Supervisor MUST NOT kill a PM without exhausting the escalation ladder:

| Step | Time | Action |
|---|---|---|
| 1 | T+0 | `"@pm-<project> status check — please respond"` |
| 2 | T+2min | `"@pm-<project> no response. Are you stuck? Reply ASAP."` |
| 3 | T+4min | `"@pm-<project> URGENT — will restart if no response in 4 min."` |
| 4 | T+6min | `"@pm-<project> FINAL WARNING — restarting in 2 min if silent."` |
| 5 | T+8min | `stop_agent(name)` → `spawn_agent(name, ...)` with checkpoint |

Exception: If process confirmed dead (`isAlive: false`), skip escalation — respawn immediately.

### Supervisor Monitoring Loop

```
LOOP:
  1. check_notifications()
  2. IF pending: get_pending_messages() → handle each
  3. list_agents() → check isAlive for all PMs
  4. For dead PMs → immediate respawn with checkpoint
  5. read_messages(channel: "pm-sync", limit: 5)
  6. wait_for_message(channel: "pm-sync", timeout_seconds: 60)
  7. GOTO 1
```

### Tmux Session Tracking

Each agent/PM runs in its own tmux session. Supervisor maintains checkpoint with session mappings:
```
save_checkpoint(agentName: "pm-conducktor", summary: "...", metadata: {
  pm_sessions: { "pm-<slug>": { session: "pm-<slug>", pid: XXXX } }
})
```

---

## Dependency Consensus Protocol

1. Agent: `"<name>: @pm-<project> I need package <X> for <reason>"`
2. PM broadcasts to all agents on `#<slug>`
3. No objections within 60s = approved
4. Requesting agent installs and notifies `#<slug>`
5. Objections → PM mediates

### Auto-Approved Dependencies (Full-Auto)

No broadcast needed: `@types/*`, `@testing-library/*`, `vitest`, `jsdom`, packages already in `package.json`, known-safe (`zod`, `helmet`, `cors`, `express-rate-limit`, `bcryptjs`, `jsonwebtoken`, `better-sqlite3`, `framer-motion`, `react-hot-toast`).

Still requires broadcast: Unknown packages, native binaries (except better-sqlite3), build pipeline changes.
