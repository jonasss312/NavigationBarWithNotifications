import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { CREATE_FAKE_DATA_COMMAND } from "../../Constants";
import { FakeDataGateway } from "../interface/FakeDataGateway";

export class RestFakeDataGateway implements FakeDataGateway {
    private readonly serverUrl: string;

    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }
    createFakeData(): Observable<void> {
        return ajax.post<void>(this.serverUrl + CREATE_FAKE_DATA_COMMAND)
            .pipe(map((t) => t.response));
    }
}