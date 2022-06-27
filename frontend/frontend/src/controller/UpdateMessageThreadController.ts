import { Observable } from "rxjs";
import { MessageThreadGateway } from "../gateway/interface/MessageThreadGateway";

export class UpdateMessageThreadController {
    private readonly messageThreadGateway: MessageThreadGateway

    constructor(
        messageThreadGateway: MessageThreadGateway
    ) {
        this.messageThreadGateway = messageThreadGateway;
    }

    makeMessageThreadSeen(id: number): Observable<void> {
        return this.messageThreadGateway.makeMessageThreadSeen(id);
    }
}