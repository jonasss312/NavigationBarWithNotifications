import { map, Observable } from "rxjs";
import { MessageThreadGateway } from "../gateway/interface/MessageThreadGateway";
import { MessageThreadE2VConverter } from "./MessageThreadE2VConverter";
import { ViewAddMessageThread } from "./model/ViewAddMessageThread";
import { ViewMessageThread } from "./model/ViewMessageThread";

export class CreateMessageThreadController {
    private readonly messageThreadGateway: MessageThreadGateway
    private readonly messageThreadE2VConverter: MessageThreadE2VConverter;

    constructor(
        messageThreadGateway: MessageThreadGateway,
        messageThreadE2VConverter: MessageThreadE2VConverter
    ) {
        this.messageThreadE2VConverter = messageThreadE2VConverter;
        this.messageThreadGateway = messageThreadGateway;
    }

    createMessageThread(messageThread: ViewAddMessageThread): Observable<ViewMessageThread> {
        return this.messageThreadGateway.createMessageThread(messageThread).pipe(map(t => this.messageThreadE2VConverter.convert(t)));
    }
}