/** Namespace shipped by a package release (optional navigation capability). */
export interface NamespaceDescription {
    /** SAP language key or its English name. */
    language: string
    description: string
    owner?: string
}

export interface Namespace {
    /** Namespace, e.g. `/ABC/`. */
    namespace: string
    descriptions: NamespaceDescription[]
}
