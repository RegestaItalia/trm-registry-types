import { Maintainer } from "./Maintainer";

/** Navigation metadata of a package release (optional navigation capability). */
export interface PackageInfo {
    /** Full package name, e.g. `@org/name` or `name`. */
    name: string
    version: string
    description?: string
    license?: string
    /** ISO 8601 date of the release. */
    release_date: string
    private: boolean
    deprecated: boolean
    deprecated_message?: string
    website?: string
    git?: string
    keywords: string[]
    maintainers: Maintainer[]
    downloads: number
    /** All published versions of the package. */
    versions: string[]
    /** Publish date (ISO 8601) of each version. */
    version_dates: Record<string, string>
    yanked_versions: string[]
    dist_tags: Record<string, string>
    /** Dependencies declared by this release. */
    dependencies: { name: string, version: string }[]
    /** Whether the release ships a namespace (see the namespace endpoint). */
    has_namespace: boolean
}
