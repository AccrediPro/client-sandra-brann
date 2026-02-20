# QA Protocol — Detailed Reference

> Detailed QA system protocols moved from CLAUDE.md.

---

## 3-Level QA System

Every sprint MUST include QA agents with `dependencies` on ALL implementation task IDs.

### Level 1: qa-tester (Functional Testing)

**Model:** Sonnet 4.5

Runs exhaustive functional tests — automated and manual via Playwright.

**Backend:** `npx vitest run` (all pass), `npm run build` (zero errors), curl new/modified endpoints (success + error), verify DB ops, test auth flows.

**Frontend (Playwright):** Click and verify every interactive element. Forms (valid + invalid), navigation, modals, real-time updates, empty states, responsive (1280px + 375px).

**Evidence:** Screenshots: `screenshots/sprint<N>_<description>.png`

**Output:**
```
qa-tester: @pm-<project> QA Level 1 REPORT
Status: PASS | FAIL
Unit tests: X passed, Y failed
Build: CLEAN | ERRORS
Endpoints tested: N (list)
UI features verified: N (list with screenshots)
Failures: (detailed list with reproduction steps)
```

See `docs/qa-checklist.md` for full checklist.

### Level 2: qa-ui-eval (Visual & Aesthetic)

**Model:** Opus 4.6

Reviews qa-tester screenshots for: layout/alignment, typography, color/contrast, visual polish, consistency with design system.

**Output:**
```
qa-ui-eval: @pm-<project> QA Level 2 (UI) REPORT
Status: PASS | NEEDS FIXES
Issues: [file.tsx:line] Description → Precise CSS fix: "change X to Y"
```

Every issue MUST include precise fix suggestion — file, line, exact change. Vague feedback forbidden.

### Level 3: qa-ux-eval (Usability)

**Model:** Opus 4.6

Evaluates user experience: flow logic, UI feedback/loading states, discoverability, error recovery, accessibility/keyboard nav.

**Output:**
```
qa-ux-eval: @pm-<project> QA Level 3 (UX) REPORT
Status: PASS | NEEDS FIXES
Issues: [file.tsx:line] UX issue → Precise fix: "add/change/remove X"
```

Every issue MUST include precise, actionable fix.

### QA Pipeline Flow

```
Impl complete → qa-tester (L1)
  → FAIL: PM auto-triages, fix agents, re-run
  → PASS: screenshots + report → qa-ui-eval (L2) + qa-ux-eval (L3) IN PARALLEL
    → Issues found: PM creates fix tasks → fix agents → qa-tester re-verifies
    → Both pass: Sprint QA COMPLETE
```

QA agents may request fix agents from PM. QA provides precise details → PM creates fix task → spawns fix agent → qa-tester re-verifies specific fix.

### QA UI Testing: Playwright Headless

IMPORTANT: QA agents MUST use Playwright MCP server (`mcp__playwright__*` tools) in headless mode. NEVER use `mcp__claude-in-chrome__*` tools for automated QA — that controls the user's browser.

---

## Mandatory GUI Verification (ALL Frontend Tasks)

> **Every task involving frontend/UI changes MUST include GUI testing before being marked complete.** This is non-negotiable — not just for QA agents, but for ALL agents working on UI code.

### Before Marking a Frontend Task Complete:

1. **Run Playwright E2E tests** (`npx playwright test`) — all existing tests must pass, zero regressions
2. **Visually verify in a real browser** using Playwright headless or `mcp__playwright__*` MCP tools:
   - Navigate to the feature you built
   - Click every interactive element (buttons, links, modals, forms)
   - Test happy path + error states
   - Check responsive behavior (desktop + mobile)
3. **Take screenshots** as evidence: `screenshots/sprint<N>_<description>.png`
4. **Use Sonnet/Haiku for browser testing** — saves Opus context for coordination work

### Backend Tasks Must Also Verify:

- `curl` or integration tests for every new/modified endpoint
- Test both success AND error responses (400, 401, 404, 500)
- Verify DB operations work correctly

### The Rule:

**No task is "delivered" until it's been proven to work in a real environment — not just compile or pass type checks.** "It builds" ≠ "it works".
