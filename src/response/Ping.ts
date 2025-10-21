import { AuthenticationType } from "./AuthenticationType";
import { OAuth2Data } from "./OAuth2Data";
import { Message } from "./Message";

export interface Ping {
    authentication_type: AuthenticationType,
    authentication_data?: OAuth2Data,
    alert_email?: string,
    messages?: Message[]
}