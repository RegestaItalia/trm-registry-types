export type TransportType = 'TADIR' | 'DEVC' | 'LANG' | 'CUST'

export interface Transport {
    trkorr: string
    type: TransportType
    description: string
}
