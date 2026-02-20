# Full Auto Mode — Detailed Reference

> Detailed full-auto protocols moved from CLAUDE.md.

---

## Activation

Activated by user saying "FULL-AUTO" (or "full auto", "continue autonomously", "go autonomous").

**PM does NOT ask the user anything.** All decisions autonomous:
- **Project selection:** Pick most relevant or create new.
- **Plan approval:** `submit_plan` then immediately `respond_to_plan(planId, "approved")`.
- **Sprint execution:** Create tasks, spawn agents, monitor, commit, push.
- **Sprint chaining:** After QA passes, next sprint immediately.
- **QA triage:** Auto-triage, fix agents, re-run. Escalate only after 2 failed fixes.
- **Decisions:** Simplest approach wins.

## CRITICAL: Full-Auto Persistence Rule

Full-auto does NOT end until ALL sprints across ALL projects are complete. A quiet monitoring loop is NOT "done".

**NEVER return to the user while work is unfinished.** In full-auto mode:
- After spawning agents, **stay in a `wait_for_message` loop**. Do NOT output a summary and stop.
- After a sprint completes, **immediately chain** to the next sprint.
- If all agents are working, **keep listening** — agents will need answers, QA will report, blockers will appear.
- ONLY valid reasons to return: (1) all sprints truly complete, (2) user says "stop"/"pause", (3) unrecoverable failure after 2 fix cycles.

> **"I'll keep monitoring" then stopping is the #1 full-auto violation.**
> Saying you will monitor is NOT monitoring. You must ACTUALLY call `wait_for_message()` in a loop.
> After ANY status update, the VERY NEXT tool call must be `wait_for_message()` or `check_notifications()`.
> **The test:** if your last action is a text message (not a tool call), you have violated full-auto mode.

## Upfront Sprint Creation

Create ALL sprints immediately (first = `active`, rest = `planning`):
1. Nothing forgotten if context runs out
2. Sprint chaining is automatic
3. User can see full plan in dashboard
4. Refine/reorder later

## Self-Approve Protocol

1. `submit_plan(title, plan, projectId)` — for auditability
2. Immediately `respond_to_plan(planId, "approved")`
3. Do NOT poll `get_plan_status`. Proceed to task creation.

## PM Stops Only For

- QA failures after 2 fix cycles
- Unrecoverable agent crashes (2x same task)
- Truly ambiguous requirements
- Unknown dependency requests

**Deactivated by:** user saying "stop", "pause", or taking control.
