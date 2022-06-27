package com.restful.api.controller;

import com.restful.api.Constants;
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
public class MessageContentCreateController {
    @Autowired
    private MessageContentRepo messageContentRepo;
    @Autowired
    private MessageThreadRepo messageThreadRepo;

    @PostMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}" + Constants.MESSAGE_CONTENT_PATH)
    public ResponseEntity saveMessageContent(@PathVariable int threadId, @RequestBody MessageContent messageContent) {
        try {
            return trySaveMessageContentByThreadId(threadId, messageContent);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity trySaveMessageContentByThreadId(int threadId, MessageContent messageContent){
        Optional<MessageThread> foundMessageThread = messageThreadRepo.findById(threadId);
        if (!foundMessageThread.isPresent())
            return ResponseResult.BadRequest(Constants.MESSAGE_THREAD_GET_ERROR);
        if (messageContent.getContent() == null)
            return ResponseResult.BadRequest(Constants.MESSAGE_CONTENT_POST_ERROR);
        return saveNewMessageContent(messageContent, threadId);
    }

    private ResponseEntity saveNewMessageContent(MessageContent messageContent, int threadId){
        messageContent.setMessageThreadId(threadId);
        return ResponseResult.Created(messageContentRepo.save(messageContent));
    }
}
