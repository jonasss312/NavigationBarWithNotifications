package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MessageThreadUpdateController {
    @Autowired
    private MessageThreadRepo messageThreadRepo;

    @PatchMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}")
    public ResponseEntity upsertMessageThread(@PathVariable int threadId, @RequestBody MessageThread messageThread) {
        try {
            return tryUpsertMessageThreadById(threadId, messageThread);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity tryUpsertMessageThreadById(int threadId, MessageThread messageThread) {
        Optional<MessageThread> foundMessageThread = messageThreadRepo.findById(threadId);
        if (!foundMessageThread.isPresent()) {
            if (messageThread.getSummary() == null || messageThread.getTime() == null)
                return ResponseResult.BadRequest(Constants.MESSAGE_THREAD_POST_ERROR);
            return tryCreateNewMessageThread(messageThread);
        }
        return updateMessageThread(foundMessageThread, messageThread);
    }

    private ResponseEntity tryCreateNewMessageThread(MessageThread messageThread) {
        return ResponseResult.Created(messageThreadRepo.save(messageThread));
    }

    private ResponseEntity updateMessageThread(Optional<MessageThread> foundMessageThread, MessageThread messageThread) {
        MessageThread updatedMessageThread = foundMessageThread.get();
        if (messageThread.getTime() != null)
            updatedMessageThread.setTime(messageThread.getTime());
        if (messageThread.getSummary() != null)
            updatedMessageThread.setSummary(messageThread.getSummary());
        updatedMessageThread.setSeen(messageThread.getSeen());
            return ResponseResult.Ok(messageThreadRepo.save(updatedMessageThread));
    }
}
