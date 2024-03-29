import { ResponseMessage } from "./ResponseMessage"

export type WhoAmI = {
    logonMessage?: ResponseMessage,
    username: string,
    subscription?: string,
    subscriptionEnd?: Date
}