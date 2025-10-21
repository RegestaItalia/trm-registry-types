import { Message } from "./Message";

export interface WhoAmI {
    user: string,
    messages?: Message[]
}