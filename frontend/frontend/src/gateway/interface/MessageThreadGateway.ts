import { Observable } from "rxjs";
import { MessageThread } from "../../entities/MessageThread";
import { ViewAddMessageThread } from "../../controller/model/ViewAddMessageThread";

export interface MessageThreadGateway {
    createMessageThread(messageThread: ViewAddMessageThread): Observable<MessageThread>;
    getMessageThreads(): Observable<MessageThread[]>;
    getMessageThread(id: number): Observable<MessageThread>;
    deleteMessageThread(id: number): Observable<void>;
    deleteAllMessageThreads(): Observable<void>;
    makeMessageThreadSeen(id: number): Observable<void>;
}