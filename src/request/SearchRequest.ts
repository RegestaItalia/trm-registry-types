/**
 * Registry search parameters (optional navigation capability).
 *
 * At least one of `q`, `keywords`, `maintainers` or `organizations` must be provided.
 */

export type SearchSort = 'relevance' | 'downloads' | 'name' | 'updated';

export interface SearchRequest {
    /** Free text query. */
    q?: string
    /** Only packages tagged with all of these keywords. */
    keywords?: string[]
    /** Only packages maintained by these users or organizations. */
    maintainers?: string[]
    /** Only packages published under these organizations (without `@`). */
    organizations?: string[]
    sort?: SearchSort
    /** 1-based page number, defaults to 1. */
    page?: number
    /** Page size, defaults to 25 (maximum 25). */
    limit?: number
}
