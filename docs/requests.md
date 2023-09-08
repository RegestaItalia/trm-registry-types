# Request types

## OAuth2Body
- grant_type - **required** - `string`

    The type of grant of the request.

    Allowed values are:
    - `refresh_token` for requesting a new token based on the refresh token
    - `authorization_code` for requesting a new token and refresh token based on an authorization code

- code - `string`

    Mandatory when grant_type is set to `authorization_code`.

    This code is typically returned by the authentication flow callback after successfully authenticating a user.

- redirect_uri - `string`

    Mandatory when grant_type is set to `authorization_code`.

    This uri has to match the callback uri used by the authentication.

- refresh_token - `string`

    Mandatory when grant_type is set to `refresh_token`.