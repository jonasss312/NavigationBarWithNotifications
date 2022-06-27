package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class MessageThreadGetController {
    @Autowired
    private MessageThreadRepo messageThreadRepo;

    @GetMapping(value = Constants.MESSAGE_THREAD_PATH)
    public ResponseEntity getMessageThreads() {
        try {
            return ResponseResult.Ok(messageThreadRepo.findAll());
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    @GetMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}")
    public ResponseEntity getMessageThread(@PathVariable int threadId) {
        try {
            return tryGetMessageThreadById(threadId);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity tryGetMessageThreadById(int threadId) {
        Optional<MessageThread> foundMessageThread = messageThreadRepo.findById(threadId);
        if (!foundMessageThread.isPresent())
            return ResponseResult.NotFound(Constants.MESSAGE_THREAD_GET_ERROR);
        return ResponseResult.Ok(foundMessageThread.get());
    }
}
