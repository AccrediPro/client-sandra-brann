# Codebase Index

Auto-generated reference of all exports. Run `npm run docs:generate` to update.

Generated: 2026-02-16T11:39:06.959Z

## Table of Contents

- [frontend/src/](#frontendsrc)
- [frontend/src/components/](#frontendsrccomponents)
- [frontend/src/components/agents/](#frontendsrccomponentsagents)
- [frontend/src/components/setup/](#frontendsrccomponentssetup)
- [frontend/src/components/sidebar/](#frontendsrccomponentssidebar)
- [frontend/src/components/sprints/](#frontendsrccomponentssprints)
- [frontend/src/context/](#frontendsrccontext)
- [frontend/src/hooks/](#frontendsrchooks)
- [frontend/src/test/](#frontendsrctest)
- [frontend/src/utils/](#frontendsrcutils)
- [src/hub/](#srchub)
- [src/mcp/](#srcmcp)
- [src/shared/](#srcshared)

**Stats:** 307 exports across 95 files
(164 functions, 63 interfaces, 55 consts, 20 types, 5 classes)

---

## frontend/src/

### frontend/src/App.tsx

**Functions:**
- `App(): void` *(default)* 

---

## frontend/src/components/

### frontend/src/components/ActivityTimeline.tsx

**Functions:**
- `ActivityTimeline(): void`

### frontend/src/components/AgentBuilder.tsx

**Functions:**
- `AgentBuilder(): void`

### frontend/src/components/AgentStatusPanel.tsx

**Functions:**
- `AgentStatusPanel(): void`

### frontend/src/components/AgentTerminal.tsx

**Functions:**
- `AgentTerminal({ agentName, historical }: AgentTerminalProps): void`

### frontend/src/components/AuditLogViewer.tsx

**Functions:**
- `AuditLogViewer(): void`

### frontend/src/components/ChannelList.tsx

**Functions:**
- `ChannelList(): void`

### frontend/src/components/ChannelSearch.tsx

**Functions:**
- `useChannelSearch(): ChannelSearchState`
- `ChannelSearchInput({ searchQuery, setSearchQuery, searchInputRef }: ChannelSearchInputProps): void`
- `ChannelSearchEmpty(): void`

**Interfaces:**
- `interface ChannelSearchState`

### frontend/src/components/ConciergeBanner.tsx

**Functions:**
- `ConciergeBanner(): void`

### frontend/src/components/Dashboard.tsx

**Functions:**
- `Dashboard(): void`

### frontend/src/components/DependencyGraph.tsx

**Functions:**
- `DependencyGraph({ sprintId }: DependencyGraphProps): void`

### frontend/src/components/ErrorBoundary.tsx

**Classes:**
- `class ErrorBoundary extends Component<Props, State>`

### frontend/src/components/ExportButton.tsx

**Functions:**
- `ExportButton(): void`

### frontend/src/components/InstanceBadge.tsx

**Functions:**
- `InstanceBadge({ instance }: { instance: Instance }): void`

### frontend/src/components/Layout.tsx

**Functions:**
- `Layout(): void`

### frontend/src/components/LiveSprintView.tsx

**Functions:**
- `LiveSprintView(): void`

### frontend/src/components/LoginScreen.tsx

**Functions:**
- `LoginScreen({ onSkip }: { onSkip?: () => void }): void`

### frontend/src/components/MarkdownRenderer.tsx

**Functions:**
- `MarkdownRenderer({ content, style, className, currentUser }: MarkdownRendererProps): void`

### frontend/src/components/MessageBubble.tsx

**Constants:**
- `MessageBubble = memo(function MessageBubble({ message }: { message: Message }) { const { sprints } = useHub(); const { user } = useAuth(); const sprint = message.spri...`

### frontend/src/components/MessageStream.tsx

**Functions:**
- `MessageStream(): void`

### frontend/src/components/PlanApprovalPanel.tsx

**Functions:**
- `PlanApprovalPanel(): void`

### frontend/src/components/PMConsole.tsx

**Functions:**
- `PMConsole(): void`

### frontend/src/components/PostItBoard.tsx

**Functions:**
- `PostItBoard({ tasks, onSelectTask }: PostItBoardProps): void`

### frontend/src/components/PostItCard.tsx

**Functions:**
- `PostItCard({ task, onClick, layoutId }: PostItCardProps): void`

### frontend/src/components/ProjectBoard.tsx

**Functions:**
- `ProjectBoard(): void`

### frontend/src/components/ProjectHistory.tsx

**Functions:**
- `ProjectHistory(): void`

### frontend/src/components/ScheduleBoard.tsx

**Functions:**
- `ScheduleBoard(): void`

### frontend/src/components/SearchOverlay.tsx

**Functions:**
- `SearchOverlay({ onClose }: { onClose: () => void }): void`

### frontend/src/components/Settings.tsx

**Functions:**
- `Settings(): void`

### frontend/src/components/SetupWizard.tsx

**Functions:**
- `SetupWizard({ onComplete }: SetupWizardProps): void`

### frontend/src/components/SprintBoard.tsx

**Functions:**
- `SprintBoard(): void`

### frontend/src/components/TaskBoard.tsx

**Functions:**
- `TaskBoard(): void`

### frontend/src/components/TeamBoard.tsx

**Functions:**
- `TeamBoard(): void`

### frontend/src/components/TerminalPanel.tsx

**Functions:**
- `TerminalPanel({ tabs, activeTab, onSelectTab, onCloseTab, onClose }: TerminalPanelProps): void`

**Interfaces:**
- `interface TerminalTab`

### frontend/src/components/VelocityChart.tsx

**Functions:**
- `VelocityChart(): void`

---

## frontend/src/components/agents/

### frontend/src/components/agents/AgentDetailPanel.tsx

**Functions:**
- `AgentDetailPanel({ agent, onClose }: AgentDetailPanelProps): void`

---

## frontend/src/components/setup/

### frontend/src/components/setup/ApiKeyStep.tsx

**Functions:**
- `ApiKeyStep({ apiKey, onKeyGenerated, onNext, onBack }: ApiKeyStepProps): void`

### frontend/src/components/setup/LaunchStep.tsx

**Functions:**
- `LaunchStep({ apiKey, projectCreated, selectedTeam, onComplete, onBack }: LaunchStepProps): void`

### frontend/src/components/setup/ProjectStep.tsx

**Functions:**
- `ProjectStep({ apiKey, projectCreated, onProjectCreated, onNext, onBack }: ProjectStepProps): void`

### frontend/src/components/setup/TeamStep.tsx

**Functions:**
- `TeamStep({ apiKey, onTeamSelected, selectedTeam, onNext, onBack }: TeamStepProps): void`

### frontend/src/components/setup/WelcomeStep.tsx

**Functions:**
- `WelcomeStep({ onNext }: WelcomeStepProps): void`

---

## frontend/src/components/sidebar/

### frontend/src/components/sidebar/ActivityBar.tsx

**Functions:**
- `ActivityBar({
  activeView,
  onViewClick,
}: {
  activeView: string;
  onViewClick: (view: ActiveView) => void;
}): void`

### frontend/src/components/sidebar/ChannelRow.tsx

**Functions:**
- `UnreadBadge({ count, small }: { count: number; small?: boolean }): void`
- `ProjectUnreadBadge({ count, visible }: { count: number; visible: boolean }): void`
- `ChannelRow({
  name,
  messageCount,
  unread,
  active,
  onClick,
  indent,
  muted,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragOver,
  onDelete,
  isCrossProject,
  pinned,
  onPin,
}: {
  name: string;
  messageCount: number;
  unread: number;
  active: boolean;
  onClick: () => void;
  indent?: boolean;
  muted?: boolean;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  isDragOver?: boolean;
  onDelete?: () => void;
  isCrossProject?: boolean;
  pinned?: boolean;
  onPin?: () => void;
}): void`

### frontend/src/components/sidebar/NavGroup.tsx

**Functions:**
- `NavGroup({ label, children }: NavGroupProps): void`

**Interfaces:**
- `interface NavGroupProps`

### frontend/src/components/sidebar/NavItem.tsx

**Functions:**
- `NavItem({
  icon,
  label,
  active,
  onClick,
  variant,
  badge,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
  variant?: 'default' | 'live';
  badge?: number;
}): void`

### frontend/src/components/sidebar/ProjectSwitcher.tsx

**Functions:**
- `loadActiveProject(): string | null`
- `saveActiveProject(projectId: string | null): void`
- `ProjectSwitcher({
  projects,
  agents,
  activeProjectId,
  onSelect,
}: {
  projects: Project[];
  agents: AgentProcess[];
  activeProjectId: string | null;
  onSelect: (projectId: string | null) => void;
}): void`

### frontend/src/components/sidebar/Sidebar.tsx

**Functions:**
- `Sidebar(): void`

**Constants:**
- `ChannelList = Sidebar` -- Backward-compatible alias

### frontend/src/components/sidebar/SidebarFooter.tsx

**Functions:**
- `SidebarFooter({ user, onLogout, connected }: SidebarFooterProps): void`

### frontend/src/components/sidebar/SidebarHeader.tsx

**Functions:**
- `SidebarHeader({ collapsed, onToggleCollapse, conciergeOnline, onTalkToConcierge, totalUnread = 0 }: SidebarHeaderProps): void`

### frontend/src/components/sidebar/SidebarSearch.tsx

**Functions:**
- `SidebarSearch({
  query,
  onChange,
  inputRef,
  onClear,
  resultCount,
  highlightedIndex,
  onNavigateDown,
  onNavigateUp,
  onSelect,
}: SidebarSearchProps): void`

### frontend/src/components/sidebar/SidebarSection.tsx

**Functions:**
- `SidebarSection({
  title,
  isOpen,
  onToggle,
  badge,
  action,
  children,
  accentColor,
}: SidebarSectionProps): void`

**Interfaces:**
- `interface SidebarSectionProps`

**Constants:**
- `CollapsibleSection = SidebarSection` -- Backward-compatible alias

### frontend/src/components/sidebar/useSidebarState.ts

**Functions:**
- `useSidebarState(): void`

---

## frontend/src/components/sprints/

### frontend/src/components/sprints/SprintDAG.tsx

**Functions:**
- `SprintDAG({ taskIds, tasks, onTaskClick }: SprintDAGProps): void`

### frontend/src/components/sprints/SprintProgressBar.tsx

**Functions:**
- `SprintProgressBar({
  taskIds,
  tasks,
  showSegments = true,
  height = 6,
  animated = true,
}: SprintProgressBarProps): void`
- `SprintProgressLegend({ taskIds, tasks }: { taskIds: string[]; tasks: Task[] }): void` -- Legend row showing colored dots + labels for each status present

---

## frontend/src/context/

### frontend/src/context/AuthContext.tsx

**Functions:**
- `useAuth(): AuthState`
- `AuthProvider({ children }: { children: ReactNode }): void`

### frontend/src/context/HubContext.tsx

**Functions:**
- `useHub(): HubState`
- `HubProvider({ children }: { children: ReactNode }): void`

**Interfaces:**
- `interface Task`
- `interface TaskComment`
- `interface TaskHistoryEntry`
- `interface Sprint`
- `interface SprintMetrics`
- `interface ActivityEntry`
- `interface HubMetrics`
- `interface AgentProcess`
- `interface Notification`
- `interface Project`
- `interface PlanApproval`
- `interface StreamEntry`

**Types:**
- `type AgentStatus = 'starting' | 'running' | 'paused' | 'stopping' | 'stopped' | 'errored' | 'exited'`
- `type AgentLogHandler = (agentName: string, lines: string[], timestamp: string) => void`
- `type AgentLogEndedHandler = (agentName: string) => void`
- `type AgentStreamHandler = (agentName: string, entries: StreamEntry[]) => void`

### frontend/src/context/TerminalContext.tsx

**Functions:**
- `useTerminal(): TerminalState`
- `TerminalProvider({ children }: { children: ReactNode }): void`

---

## frontend/src/hooks/

### frontend/src/hooks/useKeyboardShortcuts.ts

**Functions:**
- `useKeyboardShortcuts({
  setActiveView,
  onSearchOpen,
  onSearchClose,
  isSearchOpen,
}: UseKeyboardShortcutsOptions): void`

### frontend/src/hooks/usePushNotifications.ts

**Functions:**
- `sendBrowserNotification(title: string, body?: string, onClick?: () => void): void`
- `usePushNotifications(): PushNotificationState`

### frontend/src/hooks/useSettings.ts

**Functions:**
- `useSettings(): void`

### frontend/src/hooks/useTheme.ts

**Functions:**
- `useTheme(): void`

**Types:**
- `type Theme = 'dark' | 'light'`

### frontend/src/hooks/useWebSocket.ts

**Functions:**
- `useWebSocket({ url, onMessage }: UseWebSocketOptions): void`

---

## frontend/src/test/

### frontend/src/test/test-utils.tsx

**Functions:**
- `createMockHubState(overrides: Partial<MockHubState>): MockHubState`
- `createMockAuthState(overrides: Partial<MockAuthState>): MockAuthState`
- `createMockTerminalState(overrides: Partial<MockTerminalState>): MockTerminalState`

**Types:**
- `type MockHubState = typeof defaultHubState`
- `type MockAuthState = typeof defaultAuthState`
- `type MockTerminalState = typeof defaultTerminalState`

---

## frontend/src/utils/

### frontend/src/utils/ansi.ts

**Functions:**
- `parseAnsi(text: string): ReactNode[]` -- Parse ANSI escape codes and return styled React spans.
- `hasAnsiCodes(text: string): boolean` -- Check if text contains ANSI escape codes
- `stripAnsi(text: string): string` -- Strip ANSI escape codes from text (for fallback/plain text use)

### frontend/src/utils/api.ts

**Functions:**
- `configureAuth(config: {
  getAccessToken: () => string | null;
  refreshAccessToken: () => Promise<string | null>;
  onAuthFailure: () => void;
}): void`
- `getAccessToken(): string | null`
- `async apiFetch(url: string, options: RequestInit): Promise<Response>`

### frontend/src/utils/themeColors.ts

**Functions:**
- `withAlpha(cssVar: string, pct): string` -- Generate a semi-transparent background from a CSS variable using color-mix.

### frontend/src/utils/toast.ts

**Constants:**
- `hubToast = { success(message: string) { toast.success(message, { ...baseOptions, iconTheme: { primary: '#22c55e', secondary: 'var(--bg-secondary)' }, }); }, erro...`

---

## src/hub/

### src/hub/agent-hooks.ts

**Functions:**
- `createSecurityHook(agentName: string): HookCallback` -- Security hook (PreToolUse): blocks dangerous commands and logs all tool calls.
- `createLoggingHook(agentName: string): HookCallback` -- Logging hook (PostToolUse): logs tool results and tracks file modifications.
- `createStopHook(agentName: string, channel: string): HookCallback` -- Stop hook: posts a completion message to the hub channel.
- `createBudgetHook(agentName: string, maxBudget: number): HookCallback` -- Budget hook (PostToolUse): tracks cumulative tool calls.
- `createCommunicationReminderHook(agentName: string, channel: string): HookCallback` -- Communication reminder hook (PostToolUse): nudges agents to post status updates
- `createMessageInjectionHook(agentName: string, _channel: string): HookCallback` -- Message injection hook (PostToolUse): auto-injects pending channel messages
- `buildAgentHooks(config: AgentHookConfig): Partial<Record<HookEvent, HookCallbackMatcher[]>>` -- Build complete SDK hook configuration for an agent.
- `getHookLogCount(agentName: string): number` -- Get hook log count for an agent from SQLite.

**Interfaces:**
- `interface AgentHookConfig`

### src/hub/agent-log-streamer.ts

**Functions:**
- `isTmuxAvailable(): boolean`
- `resetTmuxCache(): void` -- Reset tmux availability cache (for testing)

**Classes:**
- `class RingBuffer` -- Simple ring buffer that holds the last N lines

**Constants:**
- `agentLogStreamer = new AgentLogStreamer()`

### src/hub/agent-scheduler.ts

**Classes:**
- `class AgentScheduler`

**Constants:**
- `agentScheduler = new AgentScheduler({ spawn: (config, url) => agentSpawner.spawn(config, url), isAgentRunning: (name) => { const agent = agentSpawner.getAgent(name); r...`

### src/hub/agent-spawner.ts

**Functions:**
- `isPidAlive(pid: number): boolean` -- Check if a PID is still alive

**Constants:**
- `agentSpawner = new AgentSpawner()`

### src/hub/auth.ts

**Functions:**
- `authMiddleware(req: Request, res: Response, next: NextFunction): void` -- Express middleware: if HUB_AUTH_TOKEN is set, require
- `wsAuth(req: IncomingMessage): WsAuthResult` -- WebSocket upgrade check: validates token from query string (?token=xxx) or Authorization header.

**Interfaces:**
- `interface WsAuthResult` -- Result of WebSocket auth check

### src/hub/autonomy-rules.ts

**Functions:**
- `buildAgentPrompt(agentName: string, role: string, customPrompt?: string, checkpoint?: CheckpointContext, projectContext?: ProjectContext, username?: string): string` -- Build a complete agent system prompt by prepending autonomy rules.

**Interfaces:**
- `interface CheckpointContext`
- `interface ProjectContext`

**Constants:**
- `RESERVED_CHANNELS = [ { name: 'general', description: 'Hub-wide announcements and coordination' }, { name: 'pm-sync', description: 'Cross-project PM coordination channel'...` -- Channels auto-created on hub startup
- `MAX_OUTPUT_LENGTH = 10000` -- Max output length stored on agent exit

### src/hub/concierge-prompt.ts

**Functions:**
- `buildConciergePrompt(context?: ConciergeContext): string` -- Build the comprehensive system prompt for the concierge agent.

**Interfaces:**
- `interface ConciergeContext` -- Optional context injected into the concierge prompt

**Constants:**
- `CONCIERGE_CHANNEL = 'general'` -- The channel the concierge listens on — #general is the hub-wide channel visible to all
- `CONCIERGE_NAME = 'concierge'` -- The fixed agent name for the concierge
- `CONCIERGE_SPAWN_CONFIG: AgentConfig` -- The spawn configuration for the concierge agent.

### src/hub/concierge.ts

**Functions:**
- `startConcierge(projectId?: string): { started: boolean; agent?: ReturnType<typeof agentSpawner.getAgent>; error?: string }` -- Start the concierge agent if not already running.
- `stopConcierge(): boolean` -- Stop the concierge agent.
- `isConciergeRunning(): boolean` -- Check if the concierge agent is currently running.
- `getConciergeStatus(): ConciergeStatus` -- Get detailed concierge status information.

**Interfaces:**
- `interface ConciergeStatus`

### src/hub/database.ts

**Functions:**
- `checkpointWAL(_mode?: WalCheckpointMode): { busy: number; log: number; checkpointed: number }`
- `startPeriodicCheckpoint(): void`
- `getWalSizeBytes(): number`

**Types:**
- `type WalCheckpointMode = 'PASSIVE' | 'FULL' | 'RESTART' | 'TRUNCATE'`

**Constants:**
- `default (db)` *(default)* 

### src/hub/electron-paths.ts

**Functions:**
- `isElectron(): boolean` -- Detect if running in Electron context.
- `getAppDataDir(): string` -- Get the application data directory.
- `getDbPath(): string` -- Get the database file path.
- `getEnvPath(): string` -- Get the .env file path.
- `getEnvExamplePath(): string` -- Get the .env.example template path.
- `getMcpEntryPath(): string` -- Get the MCP server entry point path (src/mcp/index.js).
- `getFixedEnv(): Record<string, string>` -- Fix PATH environment variable for spawned processes in Electron.
- `getNodeBinaryPath(): string` -- Resolve the absolute path to the node/bun binary.

### src/hub/embeddings.ts

**Functions:**
- `async embedText(text: string): Promise<Float32Array>`
- `async embedAndStore(messageId: string, content: string): Promise<void>`
- `async backfillEmbeddings(): Promise<number>`
- `async semanticSearch(query: string, opts?: { channel?: string; projectId?: string; limit?: number }): Promise<SearchResult[]>`
- `getEmbeddingCount(): number`

**Interfaces:**
- `interface SearchResult`

### src/hub/index.ts

**Constants:**
- `preflightResult: PreflightResult | null`
- `hubSessionId = randomUUID()`

### src/hub/init-env.ts

**Functions:**
- `initEnv(): void` -- Initialize .env file from .env.example if it doesn't exist.

### src/hub/jwt-auth.ts

**Functions:**
- `activateAuth(): void`
- `deactivateAuth(): void`
- `isAuthActive(): boolean`
- `initAuth(): void` -- Call on hub startup to enforce auth if users already exist in the DB
- `setHubSessionId(id: string): void`
- `getHubSessionId(): string`
- `loadRevokedTokens(): void`
- `revokeToken(token: string, agentName: string): void`
- `isTokenRevoked(token: string): boolean`
- `generateAgentJwt(agentName: string): string`
- `createTokenPair(userId: string, username: string, role: string): TokenPair`
- `rotateRefreshToken(rawToken: string): { accessToken: string; refreshToken: string; userId: string; username: string; role: string }`
- `setRefreshTokenCookie(res: Response, rawToken: string): void`
- `clearRefreshTokenCookie(res: Response): void`
- `cleanupExpiredRefreshTokens(): void`
- `registerUser(username: string, password: string, role): AuthResult`
- `loginUser(username: string, password: string): AuthResult`
- `verifyToken(token: string): JwtPayload`
- `listUsers(): Array<{ id: string; username: string; role: string; createdAt: string; lastLogin: string | null }>`
- `jwtAuthMiddleware(req: Request, res: Response, next: NextFunction): void` -- Middleware that checks for JWT token in Authorization header.
- `registerAuthRoutes(router: import('express').Router): void`

**Interfaces:**
- `interface JwtPayload`
- `interface AgentJwtPayload`
- `interface UserRow`

### src/hub/mcp-sse.ts

**Functions:**
- `setupMcpSse(app: Express): void`

### src/hub/message-router.ts

**Classes:**
- `class MessageRouter`

**Interfaces:**
- `interface BufferedMessage` -- Buffered message stored in per-agent ring buffers
- `interface AgentBufferStats` -- Per-agent diagnostic stats
- `interface RouterStats` -- Aggregate router stats

**Constants:**
- `messageRouter = new MessageRouter()` -- Singleton instance — imported by routes.ts, agent-spawner.ts, and agent-hooks.ts

### src/hub/planner-prompt.ts

**Functions:**
- `buildPlannerPrompt(context?: PlannerContext): string` -- Build the system prompt for the planner agent.
- `buildPlannerSpawnConfig(context?: PlannerContext): AgentConfig` -- The spawn configuration for the planner agent.

**Interfaces:**
- `interface PlannerContext` -- Optional context injected into the planner prompt

**Constants:**
- `PLANNER_CHANNEL = 'planning'` -- The channel the planner listens on
- `PLANNER_NAME = 'planner'` -- The fixed agent name for the planner

### src/hub/planner.ts

**Functions:**
- `startPlanner(context?: PlannerContext): { started: boolean; agent?: ReturnType<typeof agentSpawner.getAgent>; error?: string }` -- Start the planner agent if not already running.
- `stopPlanner(): boolean` -- Stop the planner agent.
- `isPlannerRunning(): boolean` -- Check if the planner agent is currently running.
- `getPlannerStatus(): PlannerStatus` -- Get detailed planner status information.

**Interfaces:**
- `interface PlannerStatus`

### src/hub/preflight.ts

**Functions:**
- `parseNodeVersion(version: string): [number, number, number]` -- Parse Node.js version string like "v22.5.1" into [major, minor, patch].
- `checkNodeVersion(version: string): { ok: boolean; message: string }` -- Check if the current Node.js version meets the minimum requirement.
- `checkPlatform(platform: string): { supported: boolean; warning?: string }` -- Detect platform and warn if unsupported.
- `checkPort(port: number): Promise<boolean>` -- Check if a port is available by attempting to bind to it.
- `checkOptionalTools(): { hasTmux: boolean; hasGit: boolean; warnings: string[] }` -- Check for optional tools (tmux, git).
- `checkBuildTools(platform: string): { hasBuildTools: boolean; warning?: string }` -- Check for build tools (Xcode CLI on macOS, build-essential on Linux).
- `async runPreflight(): Promise<PreflightResult>` -- Run all preflight checks. Returns structured result with pass/fail, warnings, errors.

**Interfaces:**
- `interface PreflightEnvironment`
- `interface PreflightResult`

### src/hub/routes.ts

**Functions:**
- `setPreflightGetter(getter: () => unknown): void`

**Constants:**
- `router = Router()`

### src/hub/store.ts

**Functions:**
- `normalizeDatetime(value: string | null | undefined): string` -- Normalize datetime strings from SQLite.

**Constants:**
- `store = new Store()`

### src/hub/team-manager.ts

**Functions:**
- `getClaudeTemplateHash(): string` -- Get SHA-256 hash of CLAUDE-template.md
- `isClaudeTemplateStale(): boolean` -- Check if the cached template is stale (file changed on disk)
- `buildTeamAgentPrompt(teamName: string, agentName: string, agentSystemPrompt?: string): string` -- Build a complete agent prompt with 3-layer inheritance:

**Interfaces:**
- `interface TeamConfig`
- `interface TeamRow`

**Constants:**
- `teamManager = new TeamManager()`

### src/hub/team-presets.ts

**Functions:**
- `seedTeamPresets(): { seeded: string[]; skipped: string[] }` -- Seed predefined team presets into the team manager on hub startup.

**Constants:**
- `TEAM_PRESETS: TeamConfig[]` -- Predefined dev team templates seeded on hub startup.

### src/hub/websocket.ts

**Functions:**
- `setupWebSocket(server: Server): WebSocketServer`
- `sendToInstance(instanceName: string, event: WsServerEvent): void` -- Send an event to a specific instance by name + all browser clients
- `broadcast(event: WsServerEvent, exclude?: WebSocket): void` -- Broadcast to all connected clients (optionally exclude sender)

---

## src/mcp/

### src/mcp/hub-client.ts

**Classes:**
- `class HubClient`

**Interfaces:**
- `interface BufferedChannelMessage` -- Message stored in the per-channel ring buffer for drainMessages().
- `interface HubClientOptions`

**Constants:**
- `hubClient = new HubClient()`

### src/mcp/tools.ts

**Functions:**
- `registerTools(server: McpServer, client?: HubClient): void`

---

## src/shared/

### src/shared/protocol.ts

**Functions:**
- `createPmRequest(params: {
  sender: string;
  targetPm: string;
  requestType: PmRequestMetadata['requestType'];
  content: string;
  payload?: Record<string, unknown>;
  channel: string;
}): Omit<Message, 'id' | 'timestamp'>`
- `createPmResponse(params: {
  sender: string;
  requestId: string;
  status: PmResponseMetadata['status'];
  content: string;
  payload?: Record<string, unknown>;
  channel: string;
}): Omit<Message, 'id' | 'timestamp'>`

**Interfaces:**
- `interface Message`
- `interface PmRequestMetadata`
- `interface PmResponseMetadata`
- `interface Channel`
- `interface Instance`
- `interface Task`
- `interface TaskComment`
- `interface TaskHistoryEntry`
- `interface Sprint`
- `interface ActivityEntry`
- `interface HubMetrics`
- `interface Project`
- `interface PlanApproval`
- `interface ContextCheckpoint`
- `interface Contract`
- `interface BlueprintFeature`
- `interface BlueprintScreen`
- `interface BlueprintEntity`
- `interface BlueprintEndpoint`
- `interface BlueprintDesignTokens`
- `interface ProjectBlueprint`
- `interface McpServerConfig`
- `interface AgentConfig`
- `interface AgentProcess`
- `interface StreamEntry`
- `interface AgentSchedule`

**Types:**
- `type TaskStatus = 'pending' | 'assigned' | 'in_progress' | 'review' | 'done' | 'blocked'`
- `type TaskPriority = 'critical' | 'high' | 'normal' | 'low'`
- `type SprintStatus = 'planning' | 'active' | 'completed'`
- `type ProjectStatus = 'discovery' | 'planning' | 'active' | 'completed' | 'paused'`
- `type PlanApprovalStatus = 'pending' | 'approved' | 'rejected'`
- `type FeaturePriority = 'p0-mvp' | 'p1-important' | 'p2-nice-to-have'`
- `type AgentStatus = 'starting' | 'running' | 'paused' | 'stopping' | 'stopped' | 'errored' | 'exited'`
- `type ScheduleType = 'cron' | 'interval' | 'persistent'`
- `type WsClientEvent = | { type: 'register'; instanceId: string; name: string; role: string; projectId?: string; status?: 'active' | 'listening' | 'idle' }
  | { type: 'subscribe'; channel: string }
  | { type: 'unsubscribe...`
- `type NotificationType = | 'plan_submitted' | 'plan_approved' | 'plan_rejected'
  | 'agent_spawned' | 'agent_stopped' | 'agent_exited' | 'agent_auto_resumed'
  | 'qa_complete' | 'sprint_completed'
  | 'task_assigned' | 'task_...` -- notificationType: optional field for browser push notification support
- `type WsServerEvent = | { type: 'registered'; instanceId: string }
  | { type: 'new_message'; message: Message }
  | { type: 'message_updated'; message: Message }
  | { type: 'message_deleted'; channel: string; messageId: ...`

### src/shared/schemas.ts

**Constants:**
- `CreateChannelSchema = z.object({ name: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Channel name must be lowercase alphanumeric with hyphens'), description: z.string()...`
- `SendMessageSchema = z.object({ sender: z.string().min(1).max(100), content: z.string().min(1).max(50000), sprintId: z.string().optional(), projectId: z.string().optional(...`
- `UpdateMessageSchema = z.object({ sender: z.string().min(1).max(100).optional(), content: z.string().min(1).max(50000).optional(), }).refine(data => { return Object.keys(dat...`
- `TaskStatusEnum = z.enum(['pending', 'assigned', 'in_progress', 'review', 'done', 'blocked'])`
- `TaskPriorityEnum = z.enum(['critical', 'high', 'normal', 'low'])`
- `CreateTaskSchema = z.object({ title: z.string().min(1).max(500), description: z.string().min(1).max(10000), creator: z.string().min(1), priority: TaskPriorityEnum.option...`
- `UpdateTaskSchema = z.object({ status: TaskStatusEnum.optional(), assignee: z.string().optional(), title: z.string().min(1).max(500).optional(), description: z.string().m...`
- `AddCommentSchema = z.object({ author: z.string().min(1), content: z.string().min(1).max(10000), })`
- `SprintStatusEnum = z.enum(['planning', 'active', 'completed'])`
- `CreateSprintSchema = z.object({ name: z.string().min(1).max(200), description: z.string().max(5000).optional(), creator: z.string().min(1), startDate: z.string().datetime(...`
- `UpdateSprintSchema = z.object({ name: z.string().min(1).max(200).optional(), description: z.string().max(5000).optional(), status: SprintStatusEnum.optional(), startDate: ...`
- `ProjectStatusEnum = z.enum(['discovery', 'planning', 'active', 'completed', 'paused'])`
- `CreateProjectSchema = z.object({ name: z.string().min(1).max(200), description: z.string().max(5000).optional(), creator: z.string().min(1).optional(), // Derived from auth...`
- `UpdateProjectSchema = z.object({ name: z.string().min(1).max(200).optional(), description: z.string().max(5000).optional(), spec: z.string().max(100000).optional(), status:...`
- `WriteProjectFileSchema = z.object({ filePath: z.string().min(1).max(500), content: z.string().max(200000), })`
- `SpawnAgentSchema = z.object({ name: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Agent name must be lowercase alphanumeric with hyphens'), role: z.string().max(100)...`
- `SaveTeamSchema = z.object({ name: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Team name must be lowercase alphanumeric with hyphens'), description: z.string().ma...`
- `UpdateTeamSchema = z.object({ description: z.string().max(500).optional(), category: z.string().max(50).optional(), promptTemplate: z.string().max(50000).optional(), age...`
- `SpawnTeamSchema = z.object({ projectId: z.string().optional(), workingDir: z.string().optional(), })`
- `AddTaskToSprintSchema = z.object({ taskId: z.string().min(1), })`
- `PlanApprovalStatusEnum = z.enum(['pending', 'approved', 'rejected'])`
- `SubmitPlanSchema = z.object({ title: z.string().min(1).max(500), plan: z.string().min(1).max(100000), submittedBy: z.string().min(1).max(100), projectId: z.string().opti...`
- `RespondToPlanSchema = z.object({ status: z.enum(['approved', 'rejected']), feedback: z.string().max(10000).optional(), })`
- `SaveCheckpointSchema = z.object({ agentName: z.string().min(1).max(100), sprintId: z.string().optional(), projectId: z.string().optional(), summary: z.string().min(1).max(10...`
- `CreateApiKeySchema = z.object({ name: z.string().min(1).max(100), })`
- `CreateContractSchema = z.object({ name: z.string().min(1).max(200), content: z.string().min(1).max(100000), ownerProjectId: z.string().min(1), linkedProjectIds: z.array(z.st...`
- `UpdateContractSchema = z.object({ name: z.string().min(1).max(200).optional(), content: z.string().min(1).max(100000).optional(), linkedProjectIds: z.array(z.string()).optio...`
- `VelocityQuerySchema = z.object({ projectId: z.string().optional(), lastN: z.coerce.number().int().min(1).max(50).optional().default(10), })`
- `AuditLogQuerySchema = z.object({ user: z.string().optional(), action: z.string().optional(), resource: z.string().optional(), since: z.string().optional(), limit: z.coerce....`
- `SearchQuerySchema = z.object({ q: z.string().min(1).max(500), type: z.enum(['messages', 'tasks', 'all']).optional().default('all'), limit: z.coerce.number().int().min(1)....`
- `SemanticSearchQuerySchema = z.object({ q: z.string().min(1).max(500), limit: z.coerce.number().int().min(1).max(100).optional().default(20), channel: z.string().optional(), proje...`
- `RestartAgentSchema = z.object({ name: z.string().min(1).max(100), })`
