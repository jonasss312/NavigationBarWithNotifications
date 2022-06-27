import { Observable } from "rxjs";
import { FakeDataGateway } from "../gateway/interface/FakeDataGateway";

export class CreateFakeDataController {
    private readonly fakeDataGateway: FakeDataGateway;

    constructor(
        fakeDataGateway: FakeDataGateway
    ) {
        this.fakeDataGateway = fakeDataGateway;
    }

    createFakeData(): Observable<void> {
        return this.fakeDataGateway.createFakeData();
    }
}