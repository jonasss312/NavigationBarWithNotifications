import React from "react";
import { SERVER_PATH } from "../Constants";
import { CreateFakeDataController } from "../controller/CreateFakeDataController";
import { CreateMessageThreadController } from "../controller/CreateMessageThreadController";
import { DeleteMessageThreadController } from "../controller/DeleteMessageThreadController";
import { GetMessageContentController } from "../controller/GetMessageContentController";
import { GetMessageThreadController } from "../controller/GetMessageThreadController";
import { MessageContentE2VConverter } from "../controller/MessageContentE2VConverter";
import { MessageThreadE2VConverter } from "../controller/MessageThreadE2VConverter";
import { UpdateMessageThreadController } from "../controller/UpdateMessageThreadController";
import { RestFakeDataGateway } from "../gateway/implementation/RestFakeDataGateway";
import { RestMessageContentGateway } from "../gateway/implementation/RestMessageContentGateway";
import { RestMessageThreadGateway } from "../gateway/implementation/RestMessageThreadGateway";

const restMessageThreadGateway = new RestMessageThreadGateway(SERVER_PATH);
const restMessageContentGateway = new RestMessageContentGateway(SERVER_PATH);
const restFakeDataGateway = new RestFakeDataGateway(SERVER_PATH);

const messageThreadE2VConverter = new MessageThreadE2VConverter();
const messageContentE2VConverter = new MessageContentE2VConverter();

export interface Controllers {
    createMessageThreadController: CreateMessageThreadController;
    createFakeDataController: CreateFakeDataController;
    deleteMessageThreadController: DeleteMessageThreadController;
    getMessageThreadController: GetMessageThreadController;
    getMessageContentController: GetMessageContentController;
    updateMessageThreadController: UpdateMessageThreadController;
}

export const ControllerContext = React.createContext({
    createMessageThreadController: new CreateMessageThreadController(
        restMessageThreadGateway,
        messageThreadE2VConverter
    ),
    createFakeDataController: new CreateFakeDataController(
        restFakeDataGateway
    ),
    deleteMessageThreadController: new DeleteMessageThreadController(
        restMessageThreadGateway
    ),
    getMessageThreadController: new GetMessageThreadController(
        restMessageThreadGateway,
        messageThreadE2VConverter
    ),
    getMessageContentController: new GetMessageContentController(
        restMessageContentGateway,
        messageContentE2VConverter
    ),
    updateMessageThreadController: new UpdateMessageThreadController(
        restMessageThreadGateway
    ),
});