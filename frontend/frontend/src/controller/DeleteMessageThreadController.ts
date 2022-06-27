import { Observable } from "rxjs";
import { MessageThreadGateway } from "../gateway/interface/MessageThreadGateway";

export class DeleteMessageThreadController {
    private readonly messageThreadGateway: MessageThreadGateway

    constructor(
        messageThreadGateway: MessageThreadGateway
    ) {
        this.messageThreadGateway = messageThreadGateway;
    }

    deleteAllMessageThreads(): Observable<void> {
        return this.messageThreadGateway.deleteAllMessageThreads();
    }

    deleteMessageThread(id: number): Observable<void> {
        return this.messageThreadGateway.deleteMessageThread(id);
    }
}