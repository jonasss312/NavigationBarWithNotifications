import { MessageThread } from "../entities/MessageThread";
import { ViewMessageThread } from "./model/ViewMessageThread";

export class MessageThreadE2VConverter {
    convert(messageThread: MessageThread): ViewMessageThread {
        return new ViewMessageThread(
            messageThread.id,
            messageThread.time,
            messageThread.summary,
            messageThread.seen);
    }
}