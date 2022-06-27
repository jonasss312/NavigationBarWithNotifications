package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageContent;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageContentRepo;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MessageContentDeleteController {
    @Autowired
    private MessageContentRepo messageContentRepo;

    @DeleteMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}" + Constants.MESSAGE_CONTENT_PATH + "/{contentId}")
    public ResponseEntity deleteMessageContent(@PathVariable int threadId, @PathVariable int contentId) {
        try {
            return tryDeleteMessageContentById(contentId, threadId);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity tryDeleteMessageContentById(int contentId, int threadId){
        Optional<MessageContent> foundMessageContent = messageContentRepo.findByIdAndMessageThreadId(contentId, threadId).stream().findAny();
        if (!foundMessageContent.isPresent())
            return ResponseResult.NotFound(Constants.MESSAGE_CONTENT_GET_ERROR);
        messageContentRepo.delete(foundMessageContent.get());
        return ResponseResult.NoContent(Constants.MESSAGE_CONTENT_DELETE_SUCCESS);
    }
}
