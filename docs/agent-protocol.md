# Agent Protocol — Detailed Reference

> This document contains detailed agent protocols moved from CLAUDE.md to save context.
> Agent instances should consult this when needed for complex decomposition scenarios.

---

## Detailed Decomposition Workflow

When you receive a complex task (>15 min, >3 files, or >2 independent parts):

1. **Assess** → If complex → decompose.
2. **Plan** → Break into sub-tasks with clear acceptance criteria.
3. **Create** → `create_task()` for each sub-task.
4. **Spawn** → Sub-agents for parallel work (or self-assign sequential pieces).
5. **Coordinate** → Monitor `#<slug>`, answer questions, unblock peers.
6. **Verify** → Test each sub-task output before marking complete.
7. **Integrate** → Combine results and report to PM.

### How Decomposition Works

1. Post intent to `#<slug>`: `"<name>: @pm-<project> Task <id> is complex. Decomposing into N sub-tasks: <brief list>"`
2. Create sub-tasks via `create_task()` with testable acceptance criteria, proper `dependencies`, and `assignee` set
3. Spawn sub-agents (`<project-slug>-<name>` naming) with: precise directives (file paths, function names), team roster, checkpoint if resuming
4. Coordinate: Monitor `#<slug>`, answer questions, unblock peers
5. Verify each sub-task before marking complete
6. Integrate and report to PM when all sub-tasks pass

### Chain of Verification

```
Sub-agent completes → Posts to #<slug>
  → Parent verifies (reads file, runs test)
    → PASS: complete_task(subTaskId)
    → FAIL: feedback → sub-agent fixes → repeat
      → Parent marks original task complete ONLY when ALL sub-tasks verified
```

No task is "done" until verified by someone other than the agent that did it.

### Sub-Task Quality Requirements

Every sub-task MUST have a concrete, verifiable deliverable:

| Bad (vague) | Good (testable) |
|---|---|
| "Work on the auth system" | "Add JWT validation middleware to routes.ts returning 401 for invalid tokens" |
| "Fix the frontend" | "Fix TaskBoard.tsx: clicking task card opens detail modal with correct data" |
| "Improve performance" | "Add index on messages.channel_name — verify query <10ms for 10k messages" |
| "Update tests" | "Add 5 vitest tests for /api/agents/restart: success, not-found, already-running, crash-recovery, SQLite-persistence" |

### Maximize Parallelism via Dependencies

Every task relationship must be modeled with `dependencies` / `addBlockedBy` / `addBlocks`. If tasks CAN run in parallel, they MUST.

```
create_task({ title: "Add API route", dependencies: [] })              → runs immediately
create_task({ title: "Add frontend UI", dependencies: [] })            → runs immediately (parallel!)
create_task({ title: "QA: test route + UI", dependencies: [taskA, taskB] }) → auto-blocked
```

**Sprint structure — maximize DAG width:**
```
BAD: Task 1 → Task 2 → Task 3 → Task 4 → QA (5 × T)
GOOD: Task 1,2,3 parallel ─→ QA; Task 1→Task 4─→QA (2 × T + QA)
```

Anti-pattern: `Spawn 1 → wait → spawn next → wait`. Instead: spawn N agents for N independent tasks simultaneously.

### PM vs Agent Decomposition

PM decomposes at **feature level** (user stories → tasks) without reading code. Agents decompose at **implementation level** (tasks → sub-tasks) with full code awareness.

---

## Agent Self-Spawning Protocol

Agents MAY spawn sub-agents within their task scope for targeted, isolated work.

### When Allowed

- Within task scope: Fix-agents for bugs discovered during implementation
- Targeted fixes: Single-file bugs, CSS tweaks, isolated test failures
- Parallel sub-tasks: Breaking down a complex task into verifiable sub-tasks

### Rules

1. **Inform PM immediately:** `"<name>: @pm-<project> Self-spawned <agent-name> for <reason>. Task: <taskId>"`
2. Inherit parent's `projectId`
3. Follow naming: `<project-slug>-<fix|helper|reader>-<name>`
4. PM can override at any time
5. Cross-scope issues go through PM

### When to Escalate to PM Instead

- Cross-task dependencies or architectural changes
- Issues affecting multiple agents' work
- Need for new top-level tasks or sprint changes
- Uncertainty about approach or scope

---

## Agent Failure Recovery

Hub posts to `#<slug>` on agent exit. PM monitors proactively.

| Signal | Meaning | Action |
|---|---|---|
| Exit 0, tasks done | Normal | None |
| Exit 0, incomplete | Context exhaustion | Auto-resume or checkpoint → respawn |
| Non-0 exit | Crash | Auto-resume or check messages + tasks → respawn |
| Silent >5 min | Stuck | PM pings → restart after 10 min |

### Auto-Resume from Checkpoint

- Max retries: 2 — after 2 failed auto-resumes, escalates to PM on `#<slug>`
- Delay: 3 seconds before auto-respawn
- Checkpoint: `get_latest_checkpoint(agentName)` injected into respawn prompt
- Generation tracking: `respawnGeneration` counter prevents double-respawn race conditions

### Manual Recovery

1. `read_messages(channel, limit: 10)` + `get_task(taskId)` + `get_latest_checkpoint(agentName)`
2. Triage: context exhaustion, crash, or stuck
3. Respawn with `buildAgentPrompt(name, role, prompt, checkpoint)`
4. Same agent crashes twice on same task → escalate to @user
5. Never abandon a task. Failed agents must be respawned or tasks reassigned.

---

## Context Checkpoints

- **Before sprint boundaries:** `save_checkpoint` with agentName, summary, sprintId, projectId, completedTaskIds, pendingTaskIds, keyDecisions, filesModified
- **On respawn:** `get_latest_checkpoint(agentName)` → `buildAgentPrompt(name, role, prompt, checkpoint)`
- **Every 25 tool calls:** automatic checkpoint for context safety
- **Context pressure:** Immediate checkpoint → spawn fresh agent with checkpoint

---

## Incremental Build & Test

Never build everything and test at the end. Each sub-task MUST produce a testable artifact:

```
Sub-task 1: Add database table → VERIFY: table exists, schema correct
Sub-task 2: Add API route       → VERIFY: endpoint responds correctly
Sub-task 3: Add MCP tool        → VERIFY: tool call works end-to-end
Sub-task 4: Add validation      → VERIFY: invalid input returns 400
```

If sub-task 2 fails, fix it before starting sub-task 3.

---

## Opus Coordinates, Sonnet Reads

This pattern preserves Opus agents' context for high-value coordination and decision-making by delegating bulk file reading to Sonnet sub-agents.

### Core Principle

**Opus = Strategic thinking and coordination** (decide what to build, coordinate work)
**Sonnet = Code reading and analysis** (understand what exists, return summaries)

Opus agents should NEVER read >3 files directly for exploration. Instead, spawn Sonnet reader sub-agents.

### When to Spawn a Reader

| Scenario | Action |
|---|---|
| Exploring unfamiliar code (>3 files) | Spawn Sonnet reader |
| Understanding architecture before changes | Spawn Sonnet reader |
| Analyzing error patterns across files | Spawn Sonnet reader |
| Investigating dependencies/impact | Spawn Sonnet reader |
| Quick 1-2 file check | Read directly (no spawn needed) |

### How to Spawn a Reader

```typescript
spawn_agent({
  name: "<parent-name>-reader-<area>",
  model: "sonnet",  // CRITICAL: Use Sonnet for readers
  projectId: "<project-id>",
  workingDir: "/path/to/project",
  systemPrompt: `You are a Sonnet reader agent for @<parent-name> on #<channel>.

Read these files: <file-list>

Answer this question: <specific-question>

Rules:
- Read thoroughly and understand the code
- Return ONLY information relevant to the question
- Share discoveries: "@team TIP: <discovery>" if you find something important
- Decompose if needed: spawn sub-readers if >10 files
- Communicate with peer readers on #<channel>
- Report when done: "@<parent-name> READER REPORT: <summary>"

[See docs/reader-agent-template.md for full template]`
})
```

### Reader Communication Patterns

Readers are active team members, not just information retrievers:

**Reader → Parent (report findings)**
```
@parent READER REPORT: Analyzed 8 files (1,240 lines).
Key Finding: Feature toggles should extend existing settings table.
Recommendation: Add `type` column to distinguish toggle vs config.
```

**Reader → Peer Reader (coordinate work)**
```
@reader-frontend FYI: Backend uses `/api/settings/:key` pattern. Your UI calls should match.
```

**Reader → Team (share discoveries)**
```
@team TIP: Found shared validation utility in src/utils/validation.ts. All new settings should use validateSettingKey().
```

### Fractal Decomposition

When a reader discovers its scope is too large (>10 files), it spawns sub-readers:

```
opus-coordinator
  └─> sonnet-reader-backend (discovers 25 files)
        ├─> sonnet-reader-backend-api (8 files)
        ├─> sonnet-reader-backend-db (10 files)
        └─> sonnet-reader-backend-auth (7 files)
```

Each sub-reader reports to its parent, who synthesizes findings for the Opus coordinator.

### Why This Works

- **Context efficiency:** Opus agents preserve their ~200K token context for thinking, not storage
- **Parallel exploration:** Multiple Sonnet readers can explore different areas simultaneously
- **Better analysis:** Sonnet readers can discuss findings with each other, not just report up
- **Cost efficiency:** Sonnet is cheaper than Opus for bulk reading tasks
- **Scalability:** Fractal decomposition handles codebases of any size

### Anti-Pattern: Don't Do This

❌ **Opus reading 20 files directly**
```typescript
// BAD: Opus burning context on bulk reading
const file1 = await read('src/file1.ts')
const file2 = await read('src/file2.ts')
// ... 18 more reads, 5000+ lines filling context
// Now Opus has little room left for thinking
```

✅ **Opus spawning Sonnet reader**
```typescript
// GOOD: Opus stays strategic
spawn_agent({
  name: "coordinator-reader-analysis",
  model: "sonnet",
  systemPrompt: "Read these 20 files and tell me where auth validation happens"
})
// Sonnet reads, analyzes, returns concise summary
// Opus context stays clean for decision-making
```

### See Also

- **docs/reader-agent-template.md** — Full prompt template with examples
- **CLAUDE.md** — "Opus Coordinates, Sonnet Reads" section for quick reference
