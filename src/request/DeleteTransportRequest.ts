export interface DeleteTransportRequest<TTransport = unknown> {
    transport: TTransport
    package: string
    version: string
}
