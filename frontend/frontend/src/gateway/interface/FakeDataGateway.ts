import { Observable } from "rxjs";

export interface FakeDataGateway {
    createFakeData(): Observable<void>;
}