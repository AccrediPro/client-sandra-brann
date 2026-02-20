# Channels Protocol — Detailed Reference

> Detailed channel protocols moved from CLAUDE.md.

---

## System vs Project Channels

Only 2 system-level channels exist: `general` and `pm-sync`. ALL other channels MUST belong to a project.

| Level | Channels | Purpose |
|---|---|---|
| **System** | `general`, `pm-sync` | Global coordination, cross-project PM sync |
| **Project** | `<slug>`, `<slug>-sprint-context`, `<slug>-user-requests` | Project-scoped work |

**Creating channels MUST use `projectId`:**
```
create_channel(name: "<slug>", projectId: "<project-id>")
```
Channels created without `projectId` float as orphan system channels — protocol violation.

**Sending messages to project channels SHOULD include `projectId`:**
```
send_message(channel: "<slug>", content: "...", projectId: "<project-id>")
```

## Per-Project Channels

Every project uses 3 channels (auto-create on first message):

| Channel | Purpose | Writers |
|---|---|---|
| `#<slug>` | Main: directives, progress, questions, QA, coordination | Everyone |
| `#<slug>-sprint-context` | Institutional memory: agent reports + PM recaps | Agents + PM |
| `#<slug>-user-requests` | PM logs every user request here for traceability | PM only |

Agents MUST only use their project's channels.

## User-Requests Channel Protocol

PM MUST log EVERY user request to `#<slug>-user-requests`:

```
pm-<project>: [User Request] <timestamp>
Request: <verbatim or summarized user request>
Priority: <high|normal|low>
Sprint: <sprint name or "TBD">
```

QA agents MUST read `#<slug>-user-requests` at the start of every QA pass:
1. `read_messages(channel: "<slug>-user-requests", limit: 50)`
2. Cross-check each request against implemented features
3. Report unaddressed requests as **REQUIREMENT GAPS**

## Sprint Context Channel

`#<slug>-sprint-context` MUST be read by:
- PMs resuming from checkpoints (to recover institutional memory)
- New agents joining mid-sprint
- QA agents (to understand what was built)

## Communication Patterns

### Agent-to-Agent
Talk directly to peers. Don't route through PM. Use for: API schemas, interfaces, timing, bug reports, handoffs, help.
Format: `"<name>: @<peer> <message>"`

### When to Go Through PM
Blocked and peer unresponsive, need new tasks/dependencies, requirements clarification, dependency install approval, task completion reporting.

### PM Team Awareness
When spawning agents, PM MUST inform every agent about the full team roster (names, roles, tasks) and tell them to talk to peers on `#<slug>`.
