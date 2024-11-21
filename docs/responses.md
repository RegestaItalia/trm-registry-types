# Response types

## AuthenticationType
Indicates all possible authentication flows supported by [trm-core](https://www.npmjs.com/package/trm-core).
- `NO_AUTH`
    All requests to the registry will be executed without Authorization header.
- `BASIC`
    All requests to the registry will be executed with the Authorization header, and its value is a Basic token.
- `OAUTH2`
    All requests to the registry will be executed with the Authorization header, and its value is a Bearer token.
- `TOKEN`
    All requests to the registry will be executed with the Authorization header, and its value is a custom token.


## MessageType
Indicates all [response message](#responsemessage) types supported by [trm-core](https://www.npmjs.com/package/trm-core).

Based on this type, the client may render the message with differen styles.
- `WARNING`
    Warning message.
- `ERROR`
    Error message.
- `INFO`
    Information message.

## ResponseMessage
- type - **required** - [MessageType](#messagetype)

    The type of message.

- text - **required** - `string`

    Message.

## OAuth2Data
- authorizationUrl - **required** - `string`

    Url to open in order to start the authentication flow.

- clientId - **required** - `string`

    Client ID.

- responseType - **required** - `string`

    Response requested from the authentication flow.

    Allowed values are:
    - `code` for requesting an authorization code

- scope - `string`

    Scope of the token to generate.

## Ping
- authenticationType - **required** - [AuthenticationType](#authenticationtype)

    The type of authentication supported by the registry.

- authenticationData - [OAuth2Data](#oauth2data)

    Mandatory when authenticationType is set to `OAUTH2`.

- wallMessage - [ResponseMessage](#responsemessage)

    Message the client may show whenever a connection to the registry is made.

## WhoAmI
- username - **required** - `string`

    Username (or ID used by the registry) that identifies the logged user.

- logonMessage - [ResponseMessage](#responsemessage)

    Message the client may show whenever a user logs in.

- subscription - `string`

    Type of subscription of the logged user.

- subscriptionEnd - `string`

    End date of the subscription of the logged user.

## UserAuthorization
- canCreateReleases - **required** - `boolean`

    Indicates if the logged user (if there's any) can create releases of a package.

## Release
- version - **required** - `string`

    Semver compliant version of a release.

- latest - **required** - `boolean`

    Indicates if the current release is the latest available of the package.

- deprecated - `boolean`

    Indicates if the current release is marked as deprecated.

## View
- userAuthorizations - **required** - [UserAuthorization](#userauthorization)

    Authorizations of the logged user (if there's any)
- name - `string`

    Name of the package.

- latest - `boolean`

    Indicates if the package is marked as private.

- shortDescription - `string`

    Description of the package.

- website - `string`

    Website of the package.

- git - `string`

    Git repository of the package.

- license - `string`

    License of the package.

- release - [Release](#release)

    Release of the package.

- message - `string`

    Error message.

## AuthOAuth2
- access_token - **required** - `string`

    User access token.

- token_type - **required** - `string`

    Type of the token issued.

    Allowed values are:
    - `Bearer` when token type is Bearer

- expires_in - **required** - `number`

    The number of seconds that the access token will be valid.

- refresh_token - `string`

    Refresh token.
