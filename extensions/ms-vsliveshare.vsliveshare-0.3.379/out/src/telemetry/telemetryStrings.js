"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TelemetryEventNames {
}
TelemetryEventNames.FAULT_PREFIX = 'Fault/';
TelemetryEventNames.ACTIVATE_EXTENSION = 'activate-extension';
TelemetryEventNames.DEACTIVATE_EXTENSION = 'deactivate-extension';
TelemetryEventNames.ACTIVATE_AGENTASYNC = 'activate-agentasync';
TelemetryEventNames.JOIN_ON_START_EVENT = 'join-on-start';
TelemetryEventNames.START_AGENT = 'start-agent';
TelemetryEventNames.START_AGENT_CONNECTION = 'start-agentconnection';
TelemetryEventNames.SIGN_IN = 'signin-user';
TelemetryEventNames.JOIN_WORKSPACE = 'join-workspace';
TelemetryEventNames.SHARE_WORKSPACE = 'share-workspace';
TelemetryEventNames.WORKSPACE_RELOAD = 'reload-workspace';
TelemetryEventNames.HTTP_REQUEST_COMPLETE = 'complete-httprequest';
TelemetryEventNames.INITIALIZE_DEBUGGING = 'initialize-debugging';
TelemetryEventNames.INITIALIZE_COAUTHORING = 'initialize-coauthoring';
TelemetryEventNames.VERSION_CHECK_FAIL = TelemetryEventNames.FAULT_PREFIX + 'check-version-fault';
TelemetryEventNames.INSTALL_FAULT = TelemetryEventNames.FAULT_PREFIX + 'install-fault';
TelemetryEventNames.DOWNLOAD_FAULT = TelemetryEventNames.FAULT_PREFIX + 'download-fault';
TelemetryEventNames.SIGN_IN_FAULT = TelemetryEventNames.FAULT_PREFIX + 'signin-user-fault';
TelemetryEventNames.AGENT_INIT_SIGN_IN_ATTEMPT_FAULT = TelemetryEventNames.FAULT_PREFIX + 'signin-agentinit-fault';
TelemetryEventNames.UPDATE_WORKPSACE_NAME_FAIL = TelemetryEventNames.FAULT_PREFIX + 'update-workspace-name-fault';
TelemetryEventNames.SHARE_FAULT = TelemetryEventNames.FAULT_PREFIX + 'share-workspace-fault';
TelemetryEventNames.JOIN_FAULT = TelemetryEventNames.FAULT_PREFIX + 'join-workspace-fault';
TelemetryEventNames.ACTIVATE_EXTENSION_FAULT = TelemetryEventNames.FAULT_PREFIX + 'activate-extension-fault';
TelemetryEventNames.DEACTIVATE_EXTENSION_FAULT = TelemetryEventNames.FAULT_PREFIX + 'deactivate-extension-fault';
TelemetryEventNames.ACTIVATE_AGENTASYNC_FAULT = TelemetryEventNames.FAULT_PREFIX + 'activate-agentasync-fault';
TelemetryEventNames.UNHANDLED_COMMAND_ERROR_FAULT = TelemetryEventNames.FAULT_PREFIX + 'unhandled-commanderror-fault';
TelemetryEventNames.UNHANDLED_REJECTION_FAULT = TelemetryEventNames.FAULT_PREFIX + 'unhandled-rejection-fault';
TelemetryEventNames.TRANSITION = 'transition-state';
TelemetryEventNames.REPORT_AGENTPROGRESS = 'report-agentprogress';
TelemetryEventNames.WRITE_LOGS_FAILED = TelemetryEventNames.FAULT_PREFIX + 'write-logs-failed';
TelemetryEventNames.OPEN_LOGS_FAILED = TelemetryEventNames.FAULT_PREFIX + 'open-logs-failed';
TelemetryEventNames.NAME_LOGS_FILE_FAILED = TelemetryEventNames.FAULT_PREFIX + 'name-logfile-failed';
TelemetryEventNames.ACTIVATE_EXTENSION_API = 'activate-extensionapi';
TelemetryEventNames.SHARE_EXTENSION_SERVICE = 'share-extensionservice';
TelemetryEventNames.INVOKE_EXTENSION_COMMAND = 'invoke-extensioncommand';
TelemetryEventNames.FEEDBACK = 'report-feedback';
TelemetryEventNames.LINUX_VERSION = 'report-linuxversion';
TelemetryEventNames.SESSION = 'participate-session';
TelemetryEventNames.SILENT_SIGNIN_TIMEOUT = TelemetryEventNames.FAULT_PREFIX + 'signin-timeout-fault';
TelemetryEventNames.JOIN_FROM_BROWSER_FAULT = TelemetryEventNames.FAULT_PREFIX + 'join-browser-fault';
TelemetryEventNames.START_SHARED_TERMINAL = 'start-sharedterminal';
TelemetryEventNames.START_SHARED_TERMINAL_FAULT = TelemetryEventNames.FAULT_PREFIX + 'start-sharedterminal-fault';
exports.TelemetryEventNames = TelemetryEventNames;
class TelemetryPropertyNames {
}
TelemetryPropertyNames.FEATURE_NAME = 'liveshare.';
TelemetryPropertyNames.AGENT_START_AGENT_FOUND = TelemetryPropertyNames.FEATURE_NAME + 'AgentFound';
TelemetryPropertyNames.AGENT_SPAWN_START_TIME = TelemetryPropertyNames.FEATURE_NAME + 'AgentSpawnStartTime';
TelemetryPropertyNames.AGENT_SPAWN_END_TIME = TelemetryPropertyNames.FEATURE_NAME + 'AgentSpawnEndTime';
TelemetryPropertyNames.CORRELATION_ID = TelemetryPropertyNames.FEATURE_NAME + 'CorrelationId';
TelemetryPropertyNames.EVENT_RESULT = TelemetryPropertyNames.FEATURE_NAME + 'Result';
TelemetryPropertyNames.EVENT_MESSAGE = TelemetryPropertyNames.FEATURE_NAME + 'Message';
TelemetryPropertyNames.EVENT_EXCEPTION_STACK = TelemetryPropertyNames.FEATURE_NAME + 'ExceptionStack';
TelemetryPropertyNames.EVENT_EXCEPTION_CODE = TelemetryPropertyNames.FEATURE_NAME + 'ExceptionCode';
TelemetryPropertyNames.EVENT_DURATION = TelemetryPropertyNames.FEATURE_NAME + 'Duration';
TelemetryPropertyNames.IS_DEBUGGING = TelemetryPropertyNames.FEATURE_NAME + 'IsDebugging';
TelemetryPropertyNames.SILENT_SIGN_IN = TelemetryPropertyNames.FEATURE_NAME + 'SilentSignIn';
TelemetryPropertyNames.SIGN_IN_WITH_CODE = TelemetryPropertyNames.FEATURE_NAME + 'WithCode';
TelemetryPropertyNames.SIGN_IN_WITH_BROWSER = TelemetryPropertyNames.FEATURE_NAME + 'BrowserSignIn';
TelemetryPropertyNames.JOIN_WITH_LINK = TelemetryPropertyNames.FEATURE_NAME + 'WithLink';
TelemetryPropertyNames.SIGN_IN_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'SignInComplete';
TelemetryPropertyNames.SHARE_WORKSPACE_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'ShareWorkspaceComplete';
TelemetryPropertyNames.GET_WORKSPACE_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'GetWorkspaceComplete';
TelemetryPropertyNames.INIT_COEDITING_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'InitCoeditingComplete';
TelemetryPropertyNames.INIT_DEBUGGING_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'InitDebuggingComplete';
TelemetryPropertyNames.HTTP_REQUEST_URI_MASK = TelemetryPropertyNames.FEATURE_NAME + 'RequestUriMask';
TelemetryPropertyNames.HTTP_REQUEST_METHOD = TelemetryPropertyNames.FEATURE_NAME + 'RequestMethod';
TelemetryPropertyNames.HTTP_REQUEST_STATUS_CODE = TelemetryPropertyNames.FEATURE_NAME + 'ResponseStatusCode';
TelemetryPropertyNames.HTTP_REQUEST_REASON_PHRASE = TelemetryPropertyNames.FEATURE_NAME + 'ResponseReasonPhrase';
TelemetryPropertyNames.HTTP_CLIENT_TIMING = TelemetryPropertyNames.FEATURE_NAME + 'ClientTiming';
TelemetryPropertyNames.HTTP_SERVER_TIMING_DIAGNOSTICS = TelemetryPropertyNames.FEATURE_NAME + 'ServerTimingDiagnostics';
TelemetryPropertyNames.HTTP_CORRELATION_ID = TelemetryPropertyNames.FEATURE_NAME + 'CorrelationId';
TelemetryPropertyNames.HTTP_HAD_EXCEPTION = TelemetryPropertyNames.FEATURE_NAME + 'HadException';
TelemetryPropertyNames.HTTP_EXCEPTION_MESSAGE = TelemetryPropertyNames.FEATURE_NAME + 'ExceptionMessage';
TelemetryPropertyNames.REJECTED_BY_HOST = TelemetryPropertyNames.FEATURE_NAME + 'RejectedByHost';
TelemetryPropertyNames.JOIN_REQUEST_TIMED_OUT = TelemetryPropertyNames.FEATURE_NAME + 'JoinRequestTimedOut';
TelemetryPropertyNames.WORKSPACE_NOT_FOUND = TelemetryPropertyNames.FEATURE_NAME + 'WorkspaceNotFound';
TelemetryPropertyNames.UNAUTHORIZED = TelemetryPropertyNames.FEATURE_NAME + 'Unauthorized';
TelemetryPropertyNames.RELOAD_START_TIME = TelemetryPropertyNames.FEATURE_NAME + 'ReloadStartTime';
TelemetryPropertyNames.RELOAD_RESUMED_TIME = TelemetryPropertyNames.FEATURE_NAME + 'ReloadResumedTime';
TelemetryPropertyNames.RELOAD_END_TIME = TelemetryPropertyNames.FEATURE_NAME + 'ReloadEndTime';
TelemetryPropertyNames.JOIN_WORKSPACE_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'JoinWorkspaceComplete';
TelemetryPropertyNames.SERVICE_ENDPOINT = TelemetryPropertyNames.FEATURE_NAME + 'ServiceEndpoint';
TelemetryPropertyNames.IS_HOST = TelemetryPropertyNames.FEATURE_NAME + 'IsHost';
TelemetryPropertyNames.VERSION_PLATFORMNAME = TelemetryPropertyNames.FEATURE_NAME + 'Version.PlatformName';
TelemetryPropertyNames.VERSION_PLATFORMVERSION = TelemetryPropertyNames.FEATURE_NAME + 'Version.PlatformVersion';
TelemetryPropertyNames.VERSION_PLATFORMVERSION_SERVICEPACK = TelemetryPropertyNames.FEATURE_NAME + 'Version.PlatformVersion.ServicePack';
TelemetryPropertyNames.FAULT_TYPE = TelemetryPropertyNames.FEATURE_NAME + 'FaultType';
TelemetryPropertyNames.ENVIRONMENT_VECTOR = TelemetryPropertyNames.FEATURE_NAME + 'EnvironmentVector';
TelemetryPropertyNames.CURRENT_STATE = TelemetryPropertyNames.FEATURE_NAME + 'CurrentState';
TelemetryPropertyNames.NEXT_STATE = TelemetryPropertyNames.FEATURE_NAME + 'NextState';
TelemetryPropertyNames.TRANSITION_ACTION = TelemetryPropertyNames.FEATURE_NAME + 'TransitionAction';
TelemetryPropertyNames.EXTENSION_ACTIVATION_INITIAL_INIT_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionActivationInitialInitComplete';
TelemetryPropertyNames.EXTENSION_ACTIVATION_COMPAT_CHECK_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionActivationCompatCheckComplete';
TelemetryPropertyNames.EXTENSION_ACTIVATION_LAUNCHER_SETUP_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionActivationLauncherSetupComplete';
TelemetryPropertyNames.EXTENSION_ACTIVATION_AGENT_PROCESS_SETUP_COMPLETE = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionActivationAgentProcessSetupComplete';
TelemetryPropertyNames.EXTENSION_ACTIVATION_POST_JOIN = TelemetryPropertyNames.FEATURE_NAME + 'ActivatedPostJoin';
TelemetryPropertyNames.JOIN_FROM_BROWSER = TelemetryPropertyNames.FEATURE_NAME + 'JoinFromBrowser';
TelemetryPropertyNames.JOIN_DEBUG_SESSION_OPTION = TelemetryPropertyNames.FEATURE_NAME + 'JoinDebugSessionOption';
TelemetryPropertyNames.NAME_TAG_VISIBILITY = TelemetryPropertyNames.FEATURE_NAME + 'NameTagVisibility';
TelemetryPropertyNames.NUM_DEBUGGING_PROCESSES = TelemetryPropertyNames.FEATURE_NAME + 'NumDebuggingProcesses';
TelemetryPropertyNames.DEBUG_PROMPT = TelemetryPropertyNames.FEATURE_NAME + 'DebugPrompt';
TelemetryPropertyNames.NUM_OPEN_FILES = TelemetryPropertyNames.FEATURE_NAME + 'NumOpenFiles';
TelemetryPropertyNames.IS_INTERNAL = TelemetryPropertyNames.FEATURE_NAME + 'IsInternal';
TelemetryPropertyNames.USER_TEAM_STATUS = TelemetryPropertyNames.FEATURE_NAME + 'UserTeamStatus';
TelemetryPropertyNames.CONNECTION_MODE = TelemetryPropertyNames.FEATURE_NAME + 'ConnectionMode';
TelemetryPropertyNames.CONNECTION_MODE_USED = TelemetryPropertyNames.FEATURE_NAME + 'ConnectionModeUsed';
TelemetryPropertyNames.CREATED_AT = TelemetryPropertyNames.FEATURE_NAME + 'CreatedAt';
TelemetryPropertyNames.UPDATED_AT = TelemetryPropertyNames.FEATURE_NAME + 'UpdatedAt';
TelemetryPropertyNames.PROGRESS_DURATION = TelemetryPropertyNames.FEATURE_NAME + 'ProgressDuration';
TelemetryPropertyNames.AGENT_START_INITAL_DATA = TelemetryPropertyNames.FEATURE_NAME + 'InitialData';
TelemetryPropertyNames.AGENT_START_RESOLVED_STATE = TelemetryPropertyNames.FEATURE_NAME + 'ResolvedState';
TelemetryPropertyNames.AGENT_START_PROCESS_SPAWN_COMMAND_SENT = TelemetryPropertyNames.FEATURE_NAME + 'ProcessSpawnCommandSent';
TelemetryPropertyNames.AGENT_START_CONNECTION_RETRY_COUNT = TelemetryPropertyNames.FEATURE_NAME + 'RetryCount';
TelemetryPropertyNames.AGENT_START_CONNECTION_URI_PROTOCOL = TelemetryPropertyNames.FEATURE_NAME + 'UriProtocol';
TelemetryPropertyNames.CLIENT_LOG_LINES = TelemetryPropertyNames.FEATURE_NAME + 'ClientLogLines';
TelemetryPropertyNames.AGENT_LOG_LINES = TelemetryPropertyNames.FEATURE_NAME + 'AgentLogLines';
TelemetryPropertyNames.FEATURE_FLAGS = TelemetryPropertyNames.FEATURE_NAME + 'FeatureFlags';
TelemetryPropertyNames.EXTENSION_REQUESTED_API_VERSION = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionRequestedApiVersion';
TelemetryPropertyNames.EXTENSION_NAME = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionName';
TelemetryPropertyNames.EXTENSION_VERSION = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionVersion';
TelemetryPropertyNames.EXTENSION_INVOKED_COMMAND = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionInvokedCommand';
TelemetryPropertyNames.EXTENSION_INVOKED_COMMAND_OPTIONS = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionInvokedCommandOptions';
TelemetryPropertyNames.EXTENSION_SERVICE_NAME = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionServiceName';
TelemetryPropertyNames.EXTENSION_SERVICE_PERMITTED = TelemetryPropertyNames.FEATURE_NAME + 'ExtensionServicePermitted';
TelemetryPropertyNames.START_WAITING_FOR_HOST = TelemetryPropertyNames.FEATURE_NAME + 'StartWaitingForHost';
TelemetryPropertyNames.DONE_WAITING_FOR_HOST = TelemetryPropertyNames.FEATURE_NAME + 'DoneWaitingForHost';
TelemetryPropertyNames.GUEST_CANCELED = TelemetryPropertyNames.FEATURE_NAME + 'GuestCanceled';
TelemetryPropertyNames.TRANSITION_SEQUENCE = TelemetryPropertyNames.FEATURE_NAME + 'TransitionSequence';
TelemetryPropertyNames.TIME_SINCE_LAST_TRANSITION = TelemetryPropertyNames.FEATURE_NAME + 'TimeSinceLastTransition';
TelemetryPropertyNames.GUESTS_BY_IDE = TelemetryPropertyNames.FEATURE_NAME + 'GuestsByIDE';
TelemetryPropertyNames.DISTINCT_GUESTS_BY_IDE = TelemetryPropertyNames.FEATURE_NAME + 'DistinctGuestsByIDE';
TelemetryPropertyNames.FILE_NAME = TelemetryPropertyNames.FEATURE_NAME + 'FileName';
TelemetryPropertyNames.RELOAD_POST_TIMEOUT = TelemetryPropertyNames.FEATURE_NAME + 'ReloadPostTimeout';
TelemetryPropertyNames.SHARED_TERMINAL_SHELL = TelemetryPropertyNames.FEATURE_NAME + 'SharedTerminalShell';
TelemetryPropertyNames.SHARED_TERMINAL_READONLY = TelemetryPropertyNames.FEATURE_NAME + 'SharedTerminalReadOnly';
exports.TelemetryPropertyNames = TelemetryPropertyNames;

//# sourceMappingURL=telemetryStrings.js.map