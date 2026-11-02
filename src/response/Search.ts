import { Maintainer } from "./Maintainer";

/** A single package in a search result page, describing its `latest` release. */
export interface SearchResultItem {
    /** Full package name, e.g. `@org/name` or `name`. */
    name: string
    version: string
    description?: string
    license?: string
    maintainers: Maintainer[]
    /** ISO 8601 date of the release. */
    release_date: string
    downloads: number
    private: boolean
}

/** A paginated search result (optional navigation capability). */
export interface Search {
    /** Total number of matching packages, across all pages. */
    total: number
    page: number
    limit: number
    results: SearchResultItem[]
}
