# ConDucktor — API & Tools Reference

This file documents all MCP tools and REST API endpoints. Agents do NOT need to read this file — MCP tools are auto-discovered via the protocol. This reference is for:
- QA agents testing REST endpoints directly
- Developers building integrations
- Documentation purposes

## MCP Tools (46 total)

### Messaging (9 tools)

| Tool | Description |
|------|-------------|
| `register` | Register instance with hub (call first). Params: `name`, `role` |
| `send_message` | Send message to a channel (auto-creates channel). Params: `channel`, `content`, `metadata?` |
| `read_messages` | Read message history. Params: `channel`, `limit?`, `since?` |
| `wait_for_message` | Block until message arrives (pub/sub, up to 600s). Params: `channel`, `timeout_seconds?` |
| `list_channels` | List all channels with message counts |
| `create_channel` | Create a new channel. Params: `name`, `description?` |
| `list_instances` | List connected instances with roles and subscriptions |
| `export_markdown` | Export channel history as markdown. Params: `channel` |
| `get_docs` | Show full documentation |

### Task Queue (8 tools)

| Tool | Description |
|------|-------------|
| `create_task` | Create task. Params: `title`, `description`, `priority?`, `assignee?`, `channel?`, `dependencies?` |
| `list_tasks` | List tasks. Params: `status?`, `assignee?`, `priority?`, `channel?` |
| `get_task` | Get task details. Params: `taskId` |
| `update_task` | Update task fields. Params: `taskId`, `status?`, `assignee?`, `title?`, `description?`, `priority?` |
| `complete_task` | Mark task as done. Params: `taskId` |
| `claim_task` | Claim task (assign to self + set in_progress). Params: `taskId` |
| `add_comment` | Add comment to task. Params: `taskId`, `content` |
| `get_task_history` | Get task activity history. Params: `taskId` |

### Sprint Planning (8 tools)

| Tool | Description |
|------|-------------|
| `create_sprint` | Create sprint. Params: `name`, `startDate`, `endDate`, `description?`, `taskIds?`, `metadata?` |
| `list_sprints` | List sprints. Params: `status?`, `creator?` |
| `get_sprint` | Get sprint details. Params: `sprintId` |
| `update_sprint` | Update sprint. Params: `sprintId`, `name?`, `description?`, `status?`, `startDate?`, `endDate?`, `metadata?` |
| `delete_sprint` | Delete sprint. Params: `sprintId` |
| `add_task_to_sprint` | Add task to sprint. Params: `sprintId`, `taskId` |
| `remove_task_from_sprint` | Remove task from sprint. Params: `sprintId`, `taskId` |
| `get_sprint_metrics` | Get computed metrics. Params: `sprintId` |

### Projects (5 tools)

| Tool | Description |
|------|-------------|
| `create_project` | Create project. Params: `name`, `description?`, `workingDir?`, `metadata?` |
| `get_project` | Get project details including spec. Params: `projectId` |
| `update_project` | Update project fields. Params: `projectId`, `name?`, `description?`, `spec?`, `status?`, `claudeMdContent?`, `teamConfigName?`, `workingDir?`, `metadata?` |
| `list_projects` | List projects. Params: `status?`, `creator?` |
| `write_project_file` | Write file in project directory. Params: `projectId`, `filePath`, `content` |

### Context Checkpoints (3 tools)

| Tool | Description |
|------|-------------|
| `save_checkpoint` | Save agent context checkpoint. Params: `agentName`, `summary`, `sprintId?`, `projectId?`, `completedTaskIds?`, `pendingTaskIds?`, `keyDecisions?`, `filesModified?`, `metadata?` |
| `get_checkpoints` | List checkpoints, optionally by agent. Params: `agentName?` |
| `get_latest_checkpoint` | Get most recent checkpoint for an agent. Params: `agentName` |

### Plan Approvals (3 tools)

| Tool | Description |
|------|-------------|
| `submit_plan` | Submit a plan for user approval. Params: `title`, `plan`, `projectId?` |
| `get_plan_status` | Check approval status. Params: `planId` |
| `list_plans` | List plans. Params: `status?`, `projectId?`, `submittedBy?` |

### Observability (2 tools)

| Tool | Description |
|------|-------------|
| `get_activities` | Get recent activity feed. Params: `limit?`, `since?` |
| `get_hub_metrics` | Get hub-wide metrics |

### Agent Management (4 tools)

| Tool | Description |
|------|-------------|
| `spawn_agent` | Spawn a Claude Code agent. Params: `name`, `role?`, `model?`, `workingDir?`, `systemPrompt?`, `allowedTools?`, `skipPermissions?` |
| `stop_agent` | Stop a running agent. Params: `name` |
| `list_agents` | List all spawned agents with status |
| `get_agent_logs` | Get agent stdout/stderr logs. Params: `name`, `limit?` |

### Team Management (4 tools)

| Tool | Description |
|------|-------------|
| `save_team` | Save team config. Params: `name`, `agents[]`, `description?` |
| `list_teams` | List all saved team configurations |
| `spawn_team` | Spawn all agents in a team. Params: `name` |
| `stop_team` | Stop all agents in a team. Params: `name` |

### Agent Schedules (6 tools)

| Tool | Description |
|------|-------------|
| `create_schedule` | Create persistent agent schedule. Params: `name`, `agentConfig`, `scheduleType` (persistent/cron/interval), `cronPattern?`, `intervalMs?`, `description?`, `maxRespawns?`, `respawnDelayMs?`, `enabled?` |
| `list_schedules` | List all agent schedules with status and timing info |
| `get_schedule` | Get schedule details. Params: `id` |
| `update_schedule` | Update schedule config/timing/enable. Params: `id`, plus any fields to update |
| `delete_schedule` | Delete schedule and cancel pending respawns. Params: `id` |
| `reset_schedule_respawns` | Reset respawn counter. Params: `id` |

---


## REST API (61 endpoints)

### Channels
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/channels` | List all channels |
| POST | `/api/channels` | Create channel (201) |
| DELETE | `/api/channels/:name` | Delete channel (204) |
| GET | `/api/channels/:name/messages` | Get messages (`?limit`, `?since`) |
| POST | `/api/channels/:name/messages` | Send message (201) |
| GET | `/api/channels/:name/export` | Export as markdown |
| GET | `/api/channels/:name/messages/cursor` | Cursor-based pagination (`?cursor`, `?limit`, `?direction`) |

### Instances
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/instances` | List connected instances |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | List tasks (`?status`, `?assignee`, `?priority`, `?channel`) |
| POST | `/api/tasks` | Create task (201) |
| GET | `/api/tasks/:id` | Get task details |
| PATCH | `/api/tasks/:id` | Update task fields |
| DELETE | `/api/tasks/:id` | Delete task (204) |
| GET | `/api/tasks/:id/comments` | Get task comments |
| POST | `/api/tasks/:id/comments` | Add comment (201) |
| GET | `/api/tasks/:id/history` | Get task activity history |

### Sprints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/sprints` | List sprints (`?status`, `?creator`) |
| POST | `/api/sprints` | Create sprint (201) |
| GET | `/api/sprints/:id` | Get sprint details |
| PATCH | `/api/sprints/:id` | Update sprint fields |
| DELETE | `/api/sprints/:id` | Delete sprint (204) |
| GET | `/api/sprints/:id/metrics` | Get computed metrics |
| POST | `/api/sprints/:id/tasks` | Add task to sprint (201) |
| DELETE | `/api/sprints/:id/tasks/:taskId` | Remove task from sprint (204) |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List projects (`?status`, `?creator`) |
| POST | `/api/projects` | Create project (201) |
| GET | `/api/projects/:id` | Get project details |
| PATCH | `/api/projects/:id` | Update project fields |
| DELETE | `/api/projects/:id` | Delete project (204) |
| POST | `/api/projects/:id/files` | Write file in project directory (201) |

### Checkpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/checkpoints` | List checkpoints (`?agent`) |
| POST | `/api/checkpoints` | Save checkpoint (201) |
| GET | `/api/checkpoints/:id` | Get checkpoint details |
| DELETE | `/api/checkpoints/:id` | Delete checkpoint (204) |

### Plan Approvals
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/plans` | List plans (`?status`, `?projectId`, `?submittedBy`) |
| POST | `/api/plans` | Submit plan (201) |
| GET | `/api/plans/:id` | Get plan details |
| PATCH | `/api/plans/:id` | Respond to plan (approve/reject) |
| DELETE | `/api/plans/:id` | Delete plan (204) |

### Observability
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/activities` | Activity feed (`?limit`, `?since`) |
| GET | `/api/metrics` | Hub-wide metrics |

### Agents
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/agents/spawn` | Spawn agent (201) |
| GET | `/api/agents` | List all spawned agents |
| GET | `/api/agents/:name` | Get agent details |
| GET | `/api/agents/:name/logs` | Get agent logs (`?limit`) |
| DELETE | `/api/agents/:name` | Stop agent (204) |

### Teams
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/teams` | List all saved teams |
| POST | `/api/teams` | Save team config (201) |
| GET | `/api/teams/:name` | Get team config |
| DELETE | `/api/teams/:name` | Delete team (204) |
| POST | `/api/teams/:name/spawn` | Spawn all agents in team (201) |
| POST | `/api/teams/:name/stop` | Stop all agents in team |

### Agent Schedules
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/schedules` | List all schedules |
| POST | `/api/schedules` | Create schedule (201) |
| GET | `/api/schedules/:id` | Get schedule details |
| PATCH | `/api/schedules/:id` | Update schedule |
| DELETE | `/api/schedules/:id` | Delete schedule (204) |
| POST | `/api/schedules/:id/reset` | Reset respawn counter |

### Settings
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/settings/toggles` | List all feature toggles with enabled state |
| PATCH | `/api/settings/toggles/:key` | Update a toggle (body: `{ enabled: boolean }`) |
| GET | `/api/settings/toggles/enabled` | List enabled toggle keys only |

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user (201) |
| POST | `/api/auth/login` | Login, returns JWT |
| POST | `/api/auth/refresh` | Refresh JWT |
| GET | `/api/auth/me` | Get current user info |
| GET | `/api/auth/users` | List all users (admin only) |

### Data Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cleanup` | Trigger expired message cleanup |

---
