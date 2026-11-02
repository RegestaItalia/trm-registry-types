/**
 * Opt-in, anonymous telemetry sent by clients after an action.
 *
 * Events never carry system identifiers (SID, hostname, client, installation number),
 * user names, credentials or package/transport contents: only release levels, outcomes,
 * durations and aggregate object counts.
 */

/** Version of the telemetry event schema. */
export const TELEMETRY_SCHEMA_VERSION = 1;

export type TelemetryEventType = 'install';

export type TelemetryOutcome = 'success' | 'failure';

/** Coarse reason an action failed. */
export type TelemetryFailureReason =
    /** A transport import ended with a failure return code. */
    'import' |
    /** Required SAP entries are missing on the system. */
    'sapEntries' |
    /** Engine requirements (e.g. trm-server, trm-core versions) are not met. */
    'engines' |
    /** A dependency could not be resolved or installed. */
    'dependencies' |
    'other';

/** Product family, derived from the installed software components. */
export type TelemetryProduct = 'S4HANA' | 'BW4HANA' | 'ECC' | 'NETWEAVER';

/** Non-identifying characteristics of the target SAP system. */
export interface TelemetrySystem {
    /** SAP_BASIS release, e.g. `758`. */
    basisRelease?: string
    /** SAP_BASIS support package level, e.g. `0002`. */
    basisSp?: string
    product?: TelemetryProduct
    /** Release of the product core component (S4CORE, DW4CORE, SAP_APPL), e.g. `108`. */
    productRelease?: string
    /** Support package level of the product core component. */
    productSp?: string
    /** Database system, e.g. `HDB`, `ORACLE`, `DB6`. */
    dbSystem?: string
    /** Kernel release, e.g. `793`. */
    kernelRelease?: string
}

export type TelemetryTransportType = 'DEVC' | 'TADIR' | 'LANG' | 'CUST' | 'DELETION';

export interface TelemetryTransport {
    type: TelemetryTransportType
    /** Import return code; omitted when the transport was not imported. */
    rc?: number
    /** Number of transport entries per object type (E071 OBJECT), e.g. `{ "CLAS": 3, "TABU": 1 }`. */
    objects?: Record<string, number>
}

export interface TelemetryInstallEvent {
    schemaVersion: typeof TELEMETRY_SCHEMA_VERSION
    event: 'install'
    package: {
        name: string
        version: string
        /** Installed version replaced by this install, when updating. */
        previousVersion?: string
    }
    outcome: TelemetryOutcome
    failure?: {
        reason: TelemetryFailureReason
        /** Workflow step that failed, e.g. `import-batch`. */
        step?: string
        /** Return code of the failed import. */
        rc?: number
    }
    /** Duration of the whole action, in milliseconds. */
    durationMs: number
    /** Duration of the transport import alone, in milliseconds. */
    importDurationMs?: number
    transports?: TelemetryTransport[]
    system: TelemetrySystem
    client?: {
        /** trm-core version. */
        core?: string
    }
}

export type TelemetryRequest = TelemetryInstallEvent;
