export type TransportType = 'TADIR' | 'DEVC' | 'LANG' | 'CUST'

export interface Transport {
    trkorr: string
    type: TransportType
    description: string
    contents: {
        download_link: string
        download_link_expiry?: number
        checksum: string
    }
}
