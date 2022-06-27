import { MessageContent } from "../entities/MessageContent";
import { ViewMessageContent } from "./model/ViewMessageContent";

export class MessageContentE2VConverter {
    convert(messageContent: MessageContent): ViewMessageContent {
        return new ViewMessageContent(
            messageContent.id,
            messageContent.content)
    }
}