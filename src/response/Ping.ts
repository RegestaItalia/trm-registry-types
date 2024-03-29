import { AuthenticationType } from "./AuthenticationType";
import { OAuth2Data } from "./OAuth2Data";
import { ResponseMessage } from "./ResponseMessage";

export type Ping = {
    authenticationType: AuthenticationType,
    authenticationData?: OAuth2Data,
    wallMessage?: ResponseMessage,
}