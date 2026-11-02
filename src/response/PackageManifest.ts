/** Complete manifest of a package release (optional navigation capability). */
export interface PackageManifest {
    name: string
    version: string
    /** The release manifest, including post activities. */
    manifest: any
}
