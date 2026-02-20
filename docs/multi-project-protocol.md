# Multi-Project PM Coordination — Detailed Reference

> Protocols for coordinating multiple PMs across projects.

---

## Setup

1. `#pm-sync` — created by first PM needing cross-project comms
2. PMs do NOT auto-discover. User tells each PM about the other. PM posts intro to `#pm-sync`.
3. Each PM registers as `pm-<their-slug>` normally.

## Communication Protocol

**Sending:** Post to `#pm-sync` with `@pm-<other-slug>`. Continue own work — don't block.

**Receiving — use short-timeout monitoring loop:**
```
1. wait_for_message("<slug>", timeout_seconds: 60)  ← short, not 300s
2. check_notifications()                             ← catches #pm-sync!
3. IF urgent on #pm-sync: get_pending_messages → RESPOND immediately
4. Process project channel messages
5. GOTO 1
```

**Fallback:** No response after 2 cycles (~2 min) → escalate to own `#<slug>` with @user.

## Cross-Project Task Dependencies

1. PM A creates task noting dependency: `"Blocked on Project B: <what we need>"`
2. PM A posts on `#pm-sync`: `"@pm-<project-b> We need <X> before <Y>. Task ID: <id>"`
3. PM B acknowledges, creates corresponding task
4. PM B completes → posts `"@pm-<project-a> <X> done. Unblock <Y>."`
5. PM A receives via `check_notifications()` → unblocks task

## Rules

- PMs ONLY use `#pm-sync` for cross-project talk. Never post on another project's `#<slug>`.
- Each PM is sole authority over own project's tasks, agents, sprints.
- Cross-project deps tracked as comments on tasks (tasks are project-scoped).
- PMs MUST use `check_notifications()` in monitoring loop.
