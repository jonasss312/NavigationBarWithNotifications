package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageContent;
import com.restful.api.repo.MessageContentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MessageContentUpdateController {
    @Autowired
    private MessageContentRepo messageContentRepo;

    @PatchMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}" + Constants.MESSAGE_CONTENT_PATH + "/{contentId}")
    public ResponseEntity updateMessageThread(@PathVariable int threadId, @PathVariable int contentId, @RequestBody MessageContent messageContent) {
        try {
            return tryUpdateMessageContentById(contentId, threadId, messageContent);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity tryUpdateMessageContentById(int contentId, int threadId, MessageContent messageThread) {
        Optional<MessageContent> foundMessageContent = messageContentRepo.findByIdAndMessageThreadId(contentId, threadId).stream().findAny();
        if (!foundMessageContent.isPresent())
            return ResponseResult.NotFound(Constants.MESSAGE_CONTENT_GET_ERROR);
        if (messageThread.getContent() == null)
            return ResponseResult.BadRequest(Constants.MESSAGE_CONTENT_POST_ERROR);
        return updateMessageThread(foundMessageContent, messageThread);
    }

    private ResponseEntity updateMessageThread(Optional<MessageContent> foundMessageContent, MessageContent messageContent) {
        MessageContent updatedMessageContent = foundMessageContent.get();
        updatedMessageContent.setContent(messageContent.getContent());
        return ResponseResult.Ok(messageContentRepo.save(updatedMessageContent));
    }
}
