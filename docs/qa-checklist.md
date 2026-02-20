# QA Checklist

Codified checklist for qa-tester agents. Every item must be explicitly verified and reported.

---

## Backend Testing

### Automated Tests
- [ ] `npx vitest run` — ALL tests pass (report count: passed/failed/skipped)
- [ ] `npm run build` — zero TypeScript errors
- [ ] `npm run lint` — no new lint errors (pre-existing are noted but not blocking)

### API Endpoints (for each new/modified endpoint)
- [ ] Success case: correct status code and response body
- [ ] Validation: invalid input returns 400 with Zod error details
- [ ] Auth: unauthenticated request returns 401
- [ ] Auth: unauthorized request returns 403 (if applicable)
- [ ] Not found: missing resource returns 404
- [ ] Conflict: duplicate/version mismatch returns 409 (if applicable)
- [ ] Edge cases: empty strings, null values, very long strings, special characters

### Database
- [ ] New tables have correct schema (columns, types, constraints)
- [ ] Indexes exist for frequently queried columns
- [ ] Foreign key relationships are correct (if applicable)
- [ ] Data persists across server restart

### WebSocket
- [ ] Events fire for state changes (task updates, messages, sprint changes)
- [ ] Events contain correct payload data
- [ ] Multiple connected clients all receive broadcasts

---

## Frontend Testing (Playwright)

### Navigation
- [ ] All sidebar/nav links navigate to correct routes
- [ ] Browser back/forward buttons work
- [ ] Direct URL access works (no blank pages on refresh)
- [ ] Active page is visually highlighted in navigation

### Interactive Elements
- [ ] Every button clicks and produces expected result
- [ ] Every link navigates to expected destination
- [ ] Dropdown menus open, display options, and select correctly
- [ ] Modals open with correct data and close properly (X button, overlay click, Escape key)
- [ ] Tabs switch content correctly

### Forms
- [ ] Valid submission succeeds and shows success feedback
- [ ] Invalid submission shows error messages (not silent failure)
- [ ] Required fields are enforced
- [ ] Form resets after successful submission (if applicable)
- [ ] Loading state shown during submission

### Data Display
- [ ] Lists/tables show correct data from API
- [ ] Empty state shown when no data exists
- [ ] Loading state shown while data is fetching
- [ ] Error state shown when API fails
- [ ] Pagination works (if applicable)

### Real-Time Updates
- [ ] Changes made via API appear in UI without page reload
- [ ] WebSocket reconnection works after brief disconnection
- [ ] Multiple browser tabs stay in sync

### Responsive Design
- [ ] Desktop (1280px): layout is correct, no horizontal scroll
- [ ] Mobile (375px): layout adapts, hamburger menu works, no overlapping elements
- [ ] Touch targets are large enough on mobile (min 44x44px)

---

## Screenshot Evidence

For every verified feature, take a screenshot:
- Filename format: `screenshots/sprint<N>_<feature-name>.png`
- Capture the full viewport or relevant component
- For before/after comparisons, take both screenshots

---

## Report Format

```
qa-tester: @pm_<project> QA Level 1 REPORT
Status: PASS | FAIL

**Automated:**
- Unit tests: X passed, Y failed
- Build: CLEAN | ERRORS
- Lint: X errors (Y new)

**Backend (endpoints tested):**
- GET /api/foo — PASS
- POST /api/bar — PASS
- PATCH /api/baz — FAIL (expected 200, got 500; details: ...)

**Frontend (features verified):**
- Feature A — PASS (screenshot: sprint3_feature-a.png)
- Feature B — FAIL (button click does nothing; screenshot: sprint3_feature-b-fail.png)

**Real-time:**
- WebSocket updates — PASS | FAIL (details)

**Responsive:**
- Desktop — PASS | FAIL
- Mobile — PASS | FAIL

**Overall: PASS | FAIL**
Failures requiring fixes: (numbered list with reproduction steps)
```
