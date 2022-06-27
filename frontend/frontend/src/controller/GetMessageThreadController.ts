import { map, Observable } from "rxjs";
import { MessageThreadGateway } from "../gateway/interface/MessageThreadGateway";
import { MessageThreadE2VConverter } from "./MessageThreadE2VConverter";
import { ViewMessageThread } from "./model/ViewMessageThread";

export class GetMessageThreadController {
    private readonly messageThreadGateway: MessageThreadGateway
    private readonly messageThreadE2VConverter: MessageThreadE2VConverter;

    constructor(
        messageThreadGateway: MessageThreadGateway,
        messageThreadE2VConverter: MessageThreadE2VConverter
    ) {
        this.messageThreadE2VConverter = messageThreadE2VConverter;
        this.messageThreadGateway = messageThreadGateway;
    }

    getMessageThreads(): Observable<ViewMessageThread[]> {
        return this.messageThreadGateway.getMessageThreads().pipe(map(t => t.map(element => this.messageThreadE2VConverter.convert(element))));
    }

    getMessageThread(id: number): Observable<ViewMessageThread> {
        return this.messageThreadGateway.getMessageThread(id).pipe(map(t => this.messageThreadE2VConverter.convert(t)));
    }
}