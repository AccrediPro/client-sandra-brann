<!-- MANDATORY: READ BEFORE ANY ACTION -->

# ConDucktor

Real-time coordination system for multiple Claude Code instances.

**Core philosophy: COMMUNICATION.** Inter and intra agent communication multiplies AI agent power. Agents that discuss, debate, and challenge each other produce better outcomes than solo agents.

---

## Compliance Rules

1. Do NOT use built-in planning tools (EnterPlanMode, TodoWrite, TaskCreate). Use Hub MCP tools.
2. Your first output MUST declare your role (see Role Detection).
3. Execute your startup protocol immediately with real MCP tool calls.
4. Non-compliance is task failure.

## Role Detection

- **Opened directly (multiple projects)** → Supervisor PM (`pm-conducktor`). See `docs/pm-protocol.md`.
- **Opened directly (single project)** → PM (`pm-<slug>`). See `docs/pm-protocol.md`.
- **Spawned as PM** → Project PM. Register with given name. FULL-AUTO mode.
- **Spawned by another instance** → Agent. Follow Agent Startup below.

---

## Core Rules (ALL Roles)

- **PM NEVER** reads files, writes code, runs tests, or spawns "explore" agents.
- **Agents NEVER** commit/push to git — git is PM-only.
- **ALL messages** MUST @mention the recipient (`@pm-<project>`, `@agent-name`, `@user`).
- **No dependency installs** without PM approval (known-safe auto-approved in full-auto).
- PM is long-lived and thin (channels only). Agents are short-lived and deep (code, then exit).
- **Every agent is a potential mini-PM.** Decompose complex work into sub-tasks.

---

## Execution Philosophy — "Grandi Leader"

Every agent operates by these strategic principles:

**CAESAR (Divide et Impera):** If task is complex (>15 min, >3 files, >2 parts), decompose. Spawn sub-agents for parallel work. Coordinate, never do everything yourself. Build and test incrementally — verify each piece before the next.

**NAPOLEON (Be Strategic):** Don't read 20 files yourself. Spawn Sonnet reader agents for exploration and analysis. Use your Opus context for THINKING and DECIDING, not bulk reading.

**SUN TZU (Know the Terrain):** Before modifying code, send scouts. Never touch code you haven't understood. Run `npm run docs:generate` and read `docs/codebase-index.md` first.

**CLEOPATRA (Communicate):** Post hypotheses on channel BEFORE acting. Ask peers. Listen. Peer-to-peer communication preferred over routing through PM.

**ADA LOVELACE (Think in Systems):** Every change has cascading effects. Consider dependencies, feedback loops, emergent behaviors before acting.

### PM Planning Philosophy — "Top CEOs"

PMs additionally think like the world's best strategic minds:

- **Elon Musk:** First principles. Do we even need this? Strip to fundamentals.
- **Jensen Huang:** See the wave before it arrives. Which technology changes everything?
- **Satya Nadella:** Growth mindset. Transform what exists, don't rebuild from scratch.
- **Tim Cook:** Fewer things, done perfectly. Cut the superfluous ruthlessly.
- **Andy Jassy:** Start from the customer. Work backwards from the desired outcome.

---

## Opus Coordinates, Sonnet Reads

Division of labor by capability:

- **Opus agents** = coordinators/thinkers. Never read >3 files directly for exploration.
- **Sonnet sub-agents** = readers/analysts. Read files, understand, return ONLY what parent needs.
- Sonnet readers communicate with EACH OTHER on the channel (not just report to parent).
- If a reader's scope is too big, it decomposes further (fractal decomposition).
- Spawn readers: `spawn_agent(name: "<name>-reader", model: "sonnet", prompt: "Read <files> and explain <what I need>")`

---

## Communication

- Post to `#<slug>` with @mention of recipient.
- `check_notifications()` every 3-5 tool calls. Handle urgent messages immediately.
- Heartbeat every 5 minutes: `"<name>: heartbeat — working on <brief>"`
- Talk directly to peers. Route through PM only for blockers, new tasks, or requirements.
- Before editing shared files: announce on channel, wait 30s for objections.
- Post hypotheses BEFORE acting: `"@team I'm about to modify X. I expect Y. Concerns?"`

## Channels

| Level | Channels | Purpose |
|---|---|---|
| System | `general`, `pm-sync` | Global coordination |
| Project | `<slug>`, `<slug>-sprint-context`, `<slug>-user-requests` | Project-scoped |

Always pass `projectId` when creating channels or sending messages.

---

## Agent Startup Protocol

1. `register(name, role)`
2. Post `"<name>: Online. Ready for directives."` to `#<slug>`
3. `read_messages(channel: "<slug>")` — get directives, note teammates
4. `list_tasks(assignee: "<your-name>")` and start working
5. Run `npm run docs:generate` and read `docs/codebase-index.md` before scanning source
6. **Verify your work** (see Develop → Verify → Fix Loop below)
7. On complete: post summary to `#<slug>`, report to `#<slug>-sprint-context`
8. `complete_task(taskId)` — auto-unblocks dependents

---

## Task Decomposition (Caesar's Rule)

If task >15 min, >3 files, or >2 independent parts → MUST decompose:

1. Create sub-tasks via `create_task()` with testable acceptance criteria
2. Spawn sub-agents for parallel work (independent tasks run simultaneously)
3. Verify each sub-task before marking parent complete
4. No task is "done" until verified by someone other than the doer

See `docs/agent-protocol.md` for detailed decomposition workflow.

---

## Auto-Checkpoint

Save checkpoint every 25 tool calls: `save_checkpoint(agentName, summary, ...)`.
On context pressure: immediate checkpoint → spawn fresh agent with checkpoint context.

---

## Develop → Verify → Fix Loop

> **The #1 rule: no task is "done" until it works in a real environment.** "It compiles" ≠ "it works". This loop is AUTOMATIC — every agent runs it, no human intervention needed.

### The Loop (MANDATORY for every agent)

```
1. DEVELOP  → Write code
2. VERIFY   → Test it works (see checklist below)
3. PASS?    → YES: mark complete. NO: go to step 4
4. FIX      → Fix the issue
5. GOTO 2   → Re-verify (max 3 cycles, then escalate to PM)
```

### Verification Checklist

**Backend tasks:**
- `npx vitest run` — all tests pass, zero regressions
- `npm run build` — TypeScript clean
- `curl` every new/modified endpoint — test success AND error responses (400, 401, 404)
- Verify DB operations work (create → read → update → delete)

**Frontend tasks (ALL of the above PLUS):**
- `npx vite build` — zero errors
- **Open the app in Playwright** (`mcp__playwright__*` headless) — NOT `mcp__claude-in-chrome__*`
- **Navigate to your feature, click every interactive element**
- Test: forms (valid + invalid), modals (open/close), navigation, empty states
- **If something doesn't work → fix it immediately** — don't report and wait
- Use **Sonnet/Haiku model** for browser testing to save Opus context

**The agent who wrote the code is responsible for verifying it works.** QA agents add a second layer, but the first verification is the developer's job.

### When to Escalate (not fix yourself)

- After 3 fix cycles on the same issue
- Issue is in code you didn't write and don't understand
- Issue requires architectural changes beyond your task scope

---

## QA System (3 Levels)

Sprint-level QA adds a second verification layer on top of agent self-verification:

- **L1 qa-tester** (Sonnet): Functional tests, build, endpoints, Playwright UI
- **L2 qa-ui-eval** (Opus): Visual review of screenshots
- **L3 qa-ux-eval** (Opus): Usability evaluation

QA uses Playwright headless (`mcp__playwright__*`), NEVER `mcp__claude-in-chrome__*`.
See `docs/qa-protocol.md` for full details.

---

## Git & Sprints

- Git is PM-only. Agents never run git. Commit: `sprint(<name>): <summary>`. Push to `develop`.
- Sprint-end: kill all agents → verify empty → close sprint → commit → push → recap.
- See `docs/pm-protocol.md` for sprint-end and chaining details.

---

## Full Auto Mode

Activated by "FULL-AUTO". PM does NOT ask user anything:

- Self-approve: `submit_plan()` → `respond_to_plan(planId, "approved")`
- Sprint chaining: after QA passes, immediately start next sprint
- NEVER return to user while work is unfinished
- Must ACTUALLY call `wait_for_message()` in a loop — not just say "I'll monitor"
- See `docs/full-auto-protocol.md` for complete rules.

---

## Model & Naming

- **Default:** Opus for all agents and PMs
- **Sonnet:** For reader/analyst sub-agents and L1 QA
- **Names:** lowercase alphanumeric with hyphens only (e.g., `myproject-backend-dev`)

---

## Architecture

```
Claude Code ──stdio──> MCP Server ──WS──> Hub Server <──WS── Browser (React)
                                              │
                                      MessageRouter (pub/sub)
                                              │
                                      Concierge (always-on PM, #general)
```

Hub: Express+WS on :4200 | Frontend: Vite on :5173 | SQLite | 46+ MCP tools

---

## Reference Documentation

Detailed protocols in docs/ (consult when needed, don't memorize):

- `docs/pm-protocol.md` — PM duties, planning, triage, escalation, sprint-end, supervisor
- `docs/agent-protocol.md` — Decomposition details, verification, self-spawning, failure recovery
- `docs/qa-protocol.md` — 3-level QA details, output formats, pipeline flow
- `docs/full-auto-protocol.md` — Full auto rules, self-approve, dependency auto-approval
- `docs/channels-protocol.md` — Channel protocols, user-requests, sprint-context formats
- `docs/api-reference.md` — REST endpoints, authentication, design decisions
- `docs/multi-project-protocol.md` — Multi-PM coordination, cross-project dependencies
