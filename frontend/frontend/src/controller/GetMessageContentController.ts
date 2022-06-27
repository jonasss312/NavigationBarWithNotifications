import { map, Observable } from "rxjs";
import { MessageContentGateway } from "../gateway/interface/MessageContentGateway";
import { MessageContentE2VConverter } from "./MessageContentE2VConverter";
import { ViewMessageContent } from "./model/ViewMessageContent";

export class GetMessageContentController {
    private readonly messageContentGateway: MessageContentGateway
    private readonly messageContentE2VConverter: MessageContentE2VConverter;

    constructor(
        messageContentGateway: MessageContentGateway,
        messageContentE2VConverter: MessageContentE2VConverter
    ) {
        this.messageContentE2VConverter = messageContentE2VConverter;
        this.messageContentGateway = messageContentGateway;
    }

    getMessageContents(threadId: number): Observable<ViewMessageContent[]> {
        return this.messageContentGateway.getMessageContents(threadId).pipe(map(t => t.map(element => this.messageContentE2VConverter.convert(element))));
    }
}