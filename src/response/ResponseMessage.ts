import { MessageType } from "./MessageType"

export type ResponseMessage = {
    type: MessageType,
    text: string
}