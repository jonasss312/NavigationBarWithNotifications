package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.FakeData;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageContent;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageContentRepo;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class CreateFakeDataController {
    @Autowired
    private MessageContentRepo messageContentRepo;
    @Autowired
    private MessageThreadRepo messageThreadRepo;

    @PostMapping(value = Constants.CREATE_FAKE_DATA_PATH)
    public ResponseEntity createFakeData() {
        try {
            return insertFakeData();
            } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity insertFakeData(){
        MessageThread fakethread1 = messageThreadRepo.save(FakeData.FAKE_MESSAGE_THREAD_1);
        MessageThread fakethread2 = messageThreadRepo.save(FakeData.FAKE_MESSAGE_THREAD_2);
        MessageThread fakethread3 = messageThreadRepo.save(FakeData.FAKE_MESSAGE_THREAD_3);
        messageContentRepo.save(new MessageContent(FakeData.FAKE_MESSAGE_COTENT_1, fakethread1.getId()));
        messageContentRepo.save(new MessageContent(FakeData.FAKE_MESSAGE_COTENT_2, fakethread2.getId()));
        messageContentRepo.save(new MessageContent(FakeData.FAKE_MESSAGE_COTENT_3, fakethread3.getId()));
        return ResponseResult.Ok(Constants.MESSAGE_FAKE_DATA_SUCCESS);
    }
}

