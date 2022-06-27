import { map, Observable } from "rxjs";
import { MessageThread } from "../../entities/MessageThread";
import { MessageThreadGateway } from "../interface/MessageThreadGateway";
import { ajax } from "rxjs/ajax";
import { MESSAGE_THREAD_PATH } from "../../Constants";
import { ViewAddMessageThread } from "../../controller/model/ViewAddMessageThread";

export class RestMessageThreadGateway implements MessageThreadGateway {
    private readonly serverUrl: string;

    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }

    createMessageThread(messageThread: ViewAddMessageThread): Observable<MessageThread> {
        return ajax
            .post<MessageThread>(this.serverUrl + MESSAGE_THREAD_PATH, messageThread)
            .pipe(map((t) => t.response));
    }

    getMessageThreads(): Observable<MessageThread[]> {
        return ajax
            .get<MessageThread[]>(this.serverUrl + MESSAGE_THREAD_PATH)
            .pipe(map((t) => t.response));
    }

    getMessageThread(id: number): Observable<MessageThread> {
        return ajax
            .get<MessageThread>(this.serverUrl + MESSAGE_THREAD_PATH + "/" + id.toString())
            .pipe(map((t) => t.response));
    }

    deleteMessageThread(id: number): Observable<void> {
        return ajax.delete<void>(this.serverUrl + MESSAGE_THREAD_PATH + "/" + id.toString())
            .pipe(map((t) => t.response));
    }

    deleteAllMessageThreads(): Observable<void> {
        return ajax.delete<void>(this.serverUrl + MESSAGE_THREAD_PATH)
            .pipe(map((t) => t.response));
    }

    makeMessageThreadSeen(id: number): Observable<void> {
        return ajax.patch<void>(this.serverUrl + MESSAGE_THREAD_PATH + "/" + id.toString(), { seen: 1 })
            .pipe(map((t) => t.response));
    }
}