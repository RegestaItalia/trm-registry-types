export interface BatchCompareResponseItem {
    name: string
    version: string
    latestVersion?: string
    comparison?: ">" | "<" | "="
    error?: string
}

export type BatchCompareResponse = BatchCompareResponseItem[]
