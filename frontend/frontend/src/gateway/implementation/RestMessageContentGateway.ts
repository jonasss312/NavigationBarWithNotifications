import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { MESSAGE_CONTENT_PATH, MESSAGE_THREAD_PATH } from "../../Constants";
import { MessageContentGateway } from "../interface/MessageContentGateway";
import { MessageContent } from "../../entities/MessageContent";

export class RestMessageContentGateway implements MessageContentGateway {
    private readonly serverUrl: string;

    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }

    getMessageContents(threadId: number): Observable<MessageContent[]> {
        return ajax
            .get<MessageContent[]>(this.serverUrl + MESSAGE_THREAD_PATH + "/" + threadId.toString() + MESSAGE_CONTENT_PATH)
            .pipe(map((t) => t.response));
    }
}