/** README of a package release (optional navigation capability). */
export interface Readme {
    name: string
    version: string
    /** Markdown source, `null` when the release has no README. */
    readme: string | null
}
