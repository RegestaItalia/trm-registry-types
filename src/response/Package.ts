export interface Package {
    name: string
    dist_tags: Record<string, string>
    versions: string[]
    yanked_versions: string[]
    manifest: any
    deprecated: boolean
    deprecated_message?: string
    download_link: string
    download_link_expiry?: number
    changelog?: string
    checksum: string
}
