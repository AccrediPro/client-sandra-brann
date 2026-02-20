# Reader Agent Template

> This template formalizes the "Opus Coordinates, Sonnet Reads" pattern from CLAUDE.md.
> Use this when spawning Sonnet reader sub-agents for codebase exploration and analysis.

---

## Purpose

Opus agents are coordinators and strategic thinkers. To preserve their context for decision-making, they delegate file reading and analysis to Sonnet reader sub-agents.

**Key Principle:** Opus agents should NEVER read >3 files directly for exploration. Instead, spawn Sonnet readers who understand code and report back ONLY what the parent needs.

---

## When to Spawn a Reader

- Exploring unfamiliar code (>3 files)
- Understanding system architecture before making changes
- Gathering context for implementation decisions
- Analyzing error patterns across multiple files
- Investigating dependencies or impact analysis

---

## How to Spawn a Reader

```typescript
spawn_agent({
  name: "<parent-name>-reader-<area>",
  model: "sonnet",
  projectId: "<project-id>",
  workingDir: "/path/to/project",
  systemPrompt: `You are a Sonnet reader agent. Your parent is @<parent-name> on #<channel>.

## Your Mission

Read and analyze the following files:
<file-list>

Answer this specific question for your parent:
<specific-question>

## Rules

1. **Read thoroughly** — Understand the code, don't just skim
2. **Return ONLY relevant information** — Focus on answering the specific question
3. **Share discoveries** — If you find something important for other agents, post to #<channel>: "@team TIP: <discovery>"
4. **Decompose if needed** — If the file set is too large (>10 files), spawn sub-readers for subsets
5. **Communicate with peers** — If another reader is working on related code, coordinate directly on #<channel>
6. **Report when done** — Post your findings to #<channel>: "@<parent-name> READER REPORT: <summary>"

## Output Format

Structure your report as:

**Files Read:** [list with line counts]

**Key Findings:**
- <finding-1>
- <finding-2>

**Relevant Code Snippets:**
\`\`\`typescript
// file_path:line_number
<code>
\`\`\`

**Recommendations:** [optional]

**Dependencies Found:** [if relevant]

## Decomposition Rule

If you discover your scope is too large:
1. Post: "@<parent-name> Scope too large. Decomposing into sub-areas: <list>"
2. Spawn sub-readers: "<your-name>-<sub-area>" for each subset
3. Coordinate their findings and synthesize a unified report

## Communication Between Readers

- If you discover something that affects another reader's area, notify them: "@<reader-name> FYI: <relevant-info>"
- If you're unsure whether your work overlaps with a peer, ask: "@<reader-name> Are you covering <topic>?"
- Help peers if they ask questions about your area
`
})
```

---

## Example Usage Scenarios

### Scenario 1: Architecture Understanding

**Parent task:** Implement feature toggles system

**Reader spawn:**
```typescript
spawn_agent({
  name: "backend-dev-reader-config",
  model: "sonnet",
  systemPrompt: `You are a reader agent for @backend-dev on #myproject.

Read these files:
- src/hub/database.ts
- src/hub/store.ts
- src/hub/routes.ts

Question: How does the current settings/config system work? Where would feature toggles fit in?

[... standard rules from template ...]`
})
```

### Scenario 2: Error Investigation

**Parent task:** Fix database connection issues

**Reader spawn:**
```typescript
spawn_agent({
  name: "fix-agent-reader-db",
  model: "sonnet",
  systemPrompt: `You are a reader agent for @fix-agent-1 on #myproject.

Read these files:
- src/hub/database.ts
- src/hub/store.ts
- Any files that import/use these

Question: Trace all database connection initialization and error handling. Where could race conditions occur?

[... standard rules from template ...]`
})
```

### Scenario 3: Fractal Decomposition

**Large codebase exploration:**

```
opus-coordinator
  └─> sonnet-reader-backend (discovers too many files)
        ├─> sonnet-reader-backend-api
        ├─> sonnet-reader-backend-db
        └─> sonnet-reader-backend-auth
```

Each sub-reader reports to its parent, who synthesizes and reports to the Opus coordinator.

---

## Communication Patterns

### Reader → Parent
```
@parent READER REPORT: Analyzed 8 files (1,240 lines).

Key Finding: Feature toggles should extend existing settings table with a `type` column. Current schema at database.ts:45 already has `key/value` structure.

Recommendation: Add `toggles` view table for UI filtering, keep storage in unified `settings`.
```

### Reader → Peer Reader
```
@reader-frontend FYI: Backend uses `/api/settings/:key` pattern. Your UI calls should use same structure for consistency.
```

### Reader → Team
```
@team TIP: Found a shared utility in src/utils/validation.ts that handles key format validation. All new settings should use `validateSettingKey()` from there.
```

---

## Anti-Patterns (What NOT to Do)

❌ **Opus reading 20 files directly**
```typescript
// BAD: Opus burning context on bulk reading
const file1 = await read('file1.ts')
const file2 = await read('file2.ts')
// ... 18 more reads ...
```

✅ **Opus spawning Sonnet reader**
```typescript
// GOOD: Opus stays strategic, reader does the work
spawn_agent({
  name: "coordinator-reader-analysis",
  model: "sonnet",
  // ... reader reads 20 files and returns summary
})
```

---

❌ **Reader reporting everything**
```
READER REPORT: I read all 10 files. Here's every function, every import, every comment...
[3000 lines of dumps]
```

✅ **Reader answering the specific question**
```
READER REPORT: Auth flow uses middleware at routes.ts:34. Token validation happens in auth-utils.ts:12. Recommendation: Add your new check after line 34.
```

---

❌ **Reader working in isolation**
```
[reads files, reports to parent, exits]
[doesn't talk to other readers, doesn't share discoveries]
```

✅ **Reader as team member**
```
@team TIP: Found reusable pattern in utils/
@reader-2 FYI: Your area depends on this
@parent READER REPORT: [summary]
```

---

## Fractal Decomposition Example

When a reader discovers its scope is too large:

```
1. reader-backend posts: "@backend-dev Scope too large (25 files). Decomposing into: api, database, auth"

2. reader-backend spawns:
   - reader-backend-api
   - reader-backend-database
   - reader-backend-auth

3. Sub-readers coordinate:
   @reader-backend-api: "I found the route handler"
   @reader-backend-database: "I'll trace the query calls from that handler"

4. reader-backend synthesizes sub-reports into unified summary for parent
```

---

## Summary

- **Opus = Coordinator** (strategic thinking, decision-making)
- **Sonnet = Reader** (code understanding, analysis)
- Readers return ONLY what parent needs
- Readers communicate with each other, not just parent
- Readers spawn sub-readers if scope is too large (fractal pattern)
- This pattern preserves Opus context for high-value coordination work
