export type OAuth2Body = {
    grant_type : 'refresh_token' | 'authorization_code',
    code?: string,
    refresh_token?: string,
    redirect_uri?: string
}