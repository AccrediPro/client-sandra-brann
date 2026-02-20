# Getting Started with ConDucktor

ConDucktor is a real-time coordination hub for multiple Claude Code instances. It provides channels, tasks, sprints, agent spawning, and a web dashboard for orchestrating AI-driven development workflows.

---

## Prerequisites

### System Requirements

| Component | Ubuntu/Debian | macOS |
|-----------|--------------|-------|
| **Node.js** (v20+) | `sudo apt install nodejs npm` or use [nvm](https://github.com/nvm-sh/nvm) | `brew install node` or use [nvm](https://github.com/nvm-sh/nvm) |
| **Git** | `sudo apt install git` | `brew install git` (or Xcode CLI tools) |
| **tmux** (for agent spawning) | `sudo apt install tmux` | `brew install tmux` |
| **build-essential** (for native modules) | `sudo apt install build-essential python3` | Xcode CLI tools: `xcode-select --install` |

> **Recommended:** Use Node.js v20 or later. ConDucktor uses native ES modules and modern JS features.

### Claude Code CLI

ConDucktor coordinates **Claude Code** instances. You need the Claude Code CLI installed:

```bash
# Install Claude Code CLI (requires Anthropic API key or Claude subscription)
npm install -g @anthropic-ai/claude-code
```

Make sure you have an **Anthropic API key** set as `ANTHROPIC_API_KEY` in your environment, or be logged in to Claude Code with your account.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-org/conducktor.git
cd conducktor
```

### 2. Install dependencies

```bash
# Backend dependencies
npm install

# Frontend dependencies
cd frontend && npm install && cd ..
```

### 3. Build the project

```bash
# Build backend (TypeScript → JavaScript)
npm run build

# Build frontend (React → static files)
cd frontend && npx vite build && cd ..
```

---

## Configuration

### Environment Variables (.env)

On first run, ConDucktor **auto-generates** a `.env` file from `.env.example` with random secrets. You can also create it manually:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4200` | Hub server port (HTTP + WebSocket) |
| `HUB_AUTH_TOKEN` | Auto-generated | Auth token for MCP connections. **Must match** your `.mcp.json` config |
| `JWT_SECRET` | Auto-generated | Secret for JWT token signing. Auto-generated if empty |
| `JWT_EXPIRES_IN_SECS` | `2592000` (30 days) | JWT token expiration |
| `ALLOW_REGISTRATION` | `true` | Set to `false` to disable new user registration |
| `MESSAGE_TTL_DAYS` | `30` | Auto-delete messages older than N days |
| `MAX_MESSAGES_PER_CHANNEL` | `10000` | Max messages per channel before pruning |
| `CORS_ORIGINS` | `http://localhost:5173,http://localhost:4200` | Allowed CORS origins (comma-separated) |
| `RATE_LIMIT_WINDOW_MS` | `60000` | Rate limiting window (ms) |
| `RATE_LIMIT_MAX` | `200` | Max requests per rate limit window |
| `MAX_AGENTS` | `0` (unlimited) | Max concurrent spawned agents |

> **Important:** The `HUB_AUTH_TOKEN` printed at first startup must be copied into your Claude Code MCP config (see below).

### No External Services Required

ConDucktor uses **SQLite** for all data storage. No PostgreSQL, Redis, or other databases needed. The database file (`hub.db`) is auto-created in the project root.

---

## Starting the Hub

### Development mode (with hot reload)

```bash
# Terminal 1 — Hub server
npm run dev

# Terminal 2 — Frontend dev server
cd frontend && npm run dev
```

- Hub API + WebSocket: `http://localhost:4200`
- Frontend dev: `http://localhost:5173` (proxies API calls to 4200)

### Production mode

```bash
# Build everything
npm run build
cd frontend && npx vite build && cd ..

# Start (serves both API and frontend)
npm start
```

The hub serves the frontend at `http://localhost:4200`.

---

## Connecting Claude Code via MCP

ConDucktor connects to Claude Code instances through the **Model Context Protocol (MCP)**. Each Claude Code instance runs an MCP server that communicates with the hub via WebSocket.

### Configure `.mcp.json`

Create or edit `~/.claude/mcp.json` (global) or `.mcp.json` (per-project) in your Claude Code project:

```json
{
  "mcpServers": {
    "conducktor": {
      "command": "npx",
      "args": ["tsx", "/path/to/conducktor/src/mcp/index.ts"],
      "env": {
        "CLAUDE_HUB_URL": "ws://localhost:4200/ws",
        "HUB_AUTH_TOKEN": "sk_YOUR_TOKEN_HERE"
      }
    }
  }
}
```

Replace:
- `/path/to/conducktor/` with the actual absolute path to your ConDucktor installation
- `sk_YOUR_TOKEN_HERE` with the `HUB_AUTH_TOKEN` from your `.env` file (printed at first startup)

### Verify Connection

1. Start the hub: `npm run dev`
2. Open Claude Code in a terminal
3. The MCP server auto-connects. You should see the instance appear in the hub dashboard
4. Try a tool call: `register(name: "my-instance")`

---

## Using the Web Dashboard

Open `http://localhost:4200` in your browser. The dashboard has 12 views:

| View | Description |
|------|-------------|
| **Dashboard** | Overview with metrics, activity feed, velocity chart |
| **Messages** | Real-time channel messaging between instances |
| **Tasks** | Kanban board for task tracking (pending → in_progress → completed) |
| **Sprints** | Sprint planning and progress tracking |
| **Projects** | Project management with specs, teams, and status |
| **Agents** | Monitor running Claude Code agent instances |
| **Agent Builder** | Create and manage agents with custom configs |
| **Schedules** | Persistent, cron, and interval agent schedules |
| **PM Console** | Terminal-style interface for PM operations |
| **Live Sprint** | Real-time sprint progress with animated metrics |
| **Settings** | Theme, API keys, MCP config builder |
| **History** | Project timeline with sprint history |

### First Login

1. Navigate to `http://localhost:4200`
2. The first user to register gets **admin** privileges
3. Create an account with email + password
4. Or click "Continue without login" for unauthenticated access (limited features)

---

## Core Concepts

### Channels
Channels are real-time messaging rooms. Instances communicate via channels using `send_message` and `read_messages`. Channels are auto-created on first message.

### Tasks
Tasks track work items with status (pending, assigned, in_progress, review, done, blocked), priority, assignee, and dependencies. Tasks auto-unblock when dependencies complete.

### Sprints
Sprints group tasks into time-boxed iterations. Track progress, generate reports, and manage velocity.

### Projects
Projects are top-level containers with specs, team configs, channel associations, and sprint histories.

### Agents
Agents are spawned Claude Code instances that run in tmux sessions. They connect to the hub via MCP, claim tasks, and coordinate through channels.

---

## Example: Multi-Agent Workflow

Here's a typical PM-driven workflow:

### 1. Start the hub
```bash
npm run dev
```

### 2. Open Claude Code as PM
```bash
claude
```

Claude reads `CLAUDE.md` and acts as a PM. It will:
- Register as `pm_<project-name>`
- Create a project and sprint plan
- Submit the plan for approval
- Spawn agents to do the work

### 3. PM spawns agents (automatic)
The PM uses `spawn_agent` to create worker instances:
```
spawn_agent(name: "backend-dev", model: "opus", systemPrompt: "...")
spawn_agent(name: "frontend-dev", model: "opus", systemPrompt: "...")
spawn_agent(name: "qa-tester", model: "sonnet", systemPrompt: "...")
```

### 4. Agents work autonomously
Each agent:
- Registers with the hub
- Reads directives from the project channel
- Claims assigned tasks
- Posts progress updates
- Talks to peers for coordination
- Reports completion to PM

### 5. Monitor in the dashboard
Watch everything in real-time at `http://localhost:4200`:
- Live message stream between agents
- Task board showing work progress
- Sprint metrics and velocity
- Agent status indicators

---

## MCP Tools (69 tools)

ConDucktor exposes 69 MCP tools organized by category:

| Category | Tools | Examples |
|----------|-------|---------|
| **Messaging** | 6 | `send_message`, `read_messages`, `wait_for_message`, `check_notifications` |
| **Tasks** | 7 | `create_task`, `list_tasks`, `claim_task`, `complete_task`, `update_task` |
| **Sprints** | 8 | `create_sprint`, `list_sprints`, `get_sprint_metrics`, `generate_sprint_report` |
| **Projects** | 6 | `create_project`, `update_project`, `get_project_messages`, `write_project_file` |
| **Agents** | 10 | `spawn_agent`, `stop_agent`, `pause_agent`, `resume_agent`, `recall_agent` |
| **Schedules** | 6 | `create_schedule`, `list_schedules`, `update_schedule`, `delete_schedule` |
| **Teams** | 3 | `save_team`, `list_teams`, `spawn_team` |
| **Plans** | 3 | `submit_plan`, `get_plan_status`, `respond_to_plan` |
| **Checkpoints** | 3 | `save_checkpoint`, `get_checkpoints`, `get_latest_checkpoint` |
| **Other** | 7+ | `register`, `search`, `export_markdown`, `get_hub_metrics`, `audit_memory` |

See `docs/api-reference.md` for full tool documentation with parameters.

---

## REST API

The hub also exposes a REST API at `http://localhost:4200/api/`:

```bash
# Health check
curl http://localhost:4200/api/health

# List channels
curl http://localhost:4200/api/channels

# Read messages
curl http://localhost:4200/api/channels/general/messages

# List tasks
curl http://localhost:4200/api/tasks

# List agents
curl http://localhost:4200/api/agents

# Hub metrics
curl http://localhost:4200/api/health/detailed
```

See `docs/api-reference.md` for all 86 endpoints.

---

## Running Tests

```bash
# Backend tests (417 tests)
npm test

# Frontend tests (57 tests)
cd frontend && npm test

# Watch mode
npm run test:watch
cd frontend && npm run test:watch
```

---

## Troubleshooting

### "Cannot find module" errors
```bash
# Rebuild TypeScript
npm run build
```

### Port already in use
```bash
# Find and kill process on port 4200
lsof -ti:4200 | xargs kill -9
```

### SQLite errors (IOERR, locked)
```bash
# Remove stale WAL files
rm -f hub.db-shm hub.db-wal
```

### Agent spawning fails
- Ensure `tmux` is installed
- Ensure Claude Code CLI is available (`which claude`)
- Check that `HUB_AUTH_TOKEN` matches between `.env` and agent config
- Agent spawning requires BOTH `--dangerously-skip-permissions` AND `--permission-mode bypassPermissions`

### MCP connection issues
- Verify hub is running: `curl http://localhost:4200/api/health`
- Check WebSocket URL: must be `ws://localhost:4200/ws` (not `http://`)
- Verify `HUB_AUTH_TOKEN` in your `.mcp.json` matches the hub's `.env`

### Frontend not loading
```bash
# Rebuild frontend
cd frontend && npx vite build && cd ..
# Restart hub
npm start
```

---

## Project Structure

```
conducktor/
  src/
    hub/           # Hub server (Express + WebSocket + SQLite)
    mcp/           # MCP server (stdio, one per Claude Code instance)
  frontend/
    src/
      components/  # React components (16 views)
      context/     # React context (HubContext, TerminalContext)
      hooks/       # Custom hooks (useTheme, useKeyboardShortcuts)
  tests/           # Backend tests (vitest)
  docs/            # Documentation
  scripts/         # Utility scripts
  CLAUDE.md        # PM/Agent coordination rules
  .env.example     # Environment variable template
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start hub in dev mode (hot reload) |
| `npm run build` | Build backend TypeScript |
| `npm start` | Start hub in production mode |
| `npm test` | Run backend tests |
| `cd frontend && npm run dev` | Start frontend dev server |
| `cd frontend && npx vite build` | Build frontend for production |
| `cd frontend && npm test` | Run frontend tests |
| `npm run docs:generate` | Generate codebase documentation |
