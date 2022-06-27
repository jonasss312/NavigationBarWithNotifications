package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageThreadCreateController {
    @Autowired
    private MessageThreadRepo messageThreadRepo;

    @PostMapping(value = Constants.MESSAGE_THREAD_PATH)
    public ResponseEntity saveMessageThread(@RequestBody MessageThread messageThread) {
        try {
            return trySaveNewMessageThread(messageThread);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity trySaveNewMessageThread(MessageThread messageThread){
        if (messageThread.getSummary() == null || messageThread.getTime() == null)
            return ResponseResult.BadRequest(Constants.MESSAGE_THREAD_POST_ERROR);
        return ResponseResult.Created(messageThreadRepo.save(messageThread));
    }
}
