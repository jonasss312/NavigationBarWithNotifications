package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageContent;
import com.restful.api.repo.MessageContentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MessageContentGetController {
    @Autowired
    private MessageContentRepo messageContentRepo;

    @GetMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}" + Constants.MESSAGE_CONTENT_PATH)
    public ResponseEntity getMessageContents(@PathVariable int threadId) {
        try {
            return ResponseResult.Ok(messageContentRepo.findByMessageThreadId(threadId));
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    @GetMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}" + Constants.MESSAGE_CONTENT_PATH + "/{contentId}")
    public ResponseEntity getMessageContent(@PathVariable int threadId, @PathVariable int contentId) {
        try {
            return getMessageContentById(threadId, contentId);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity getMessageContentById(int threadId, int contentId) {
        Optional<MessageContent> foundMessageContent = messageContentRepo.findByIdAndMessageThreadId(contentId, threadId).stream().findAny();
        if (!foundMessageContent.isPresent()) return ResponseResult.NotFound(Constants.MESSAGE_CONTENT_GET_ERROR);
        return ResponseResult.Ok(foundMessageContent);
    }
}
