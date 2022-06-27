import { Observable } from "rxjs";
import { MessageContent } from "../../entities/MessageContent";

export interface MessageContentGateway {
    getMessageContents(threadId: number): Observable<MessageContent[]>;
}