export interface Publish {
    progress_pool_url: string,
    steps: number,
    current_step: number,
    current_step_message?: string,
    data?: {
        integrity?: string,
        error?: string,
        [key: string]: unknown
    }
}
