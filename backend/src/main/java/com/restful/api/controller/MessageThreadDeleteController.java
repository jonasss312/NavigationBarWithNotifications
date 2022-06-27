package com.restful.api.controller;

import com.restful.api.Constants;
import com.restful.api.ResponseResult;
import com.restful.api.model.MessageThread;
import com.restful.api.repo.MessageContentRepo;
import com.restful.api.repo.MessageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class MessageThreadDeleteController {
    @Autowired
    private MessageThreadRepo messageThreadRepo;
    @Autowired
    private MessageContentRepo messageContentRepo;

    @DeleteMapping(value = Constants.MESSAGE_THREAD_PATH + "/{threadId}")
    public ResponseEntity deleteMessageThread(@PathVariable int threadId) {
        try {
            return tryDeleteMessageThreadById(threadId);
        } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity tryDeleteMessageThreadById(int threadId) {
        Optional<MessageThread> foundMessageThread = messageThreadRepo.findById(threadId);
        if (!foundMessageThread.isPresent())
            return ResponseResult.NotFound(Constants.MESSAGE_CONTENT_GET_ERROR);
        deleteMessageThreadWithRelationalEntities(foundMessageThread);
        return ResponseResult.NoContent(Constants.MESSAGE_THREAD_DELETE_SUCCESS);
    }

    private void deleteMessageThreadWithRelationalEntities(Optional<MessageThread> foundMessageThread) {
        MessageThread requiredToDeleteMessageThread = foundMessageThread.get();
        messageContentRepo.deleteByMessageThreadId(requiredToDeleteMessageThread.getId());
        messageThreadRepo.delete(requiredToDeleteMessageThread);
    }

    @DeleteMapping(value = Constants.MESSAGE_THREAD_PATH)
    public ResponseEntity deleteAllMessageThreads() {
        try {
            return deleteAllMessageThreadsWithRelationalEntities();
            } catch (Exception ex) {
            return ResponseResult.ServerErrorMessage(ex);
        }
    }

    private ResponseEntity deleteAllMessageThreadsWithRelationalEntities(){
        List<Optional<MessageThread>> messageThreads =
                messageThreadRepo.findAll().stream()
                        .map((o) -> Optional.ofNullable(o))
                        .collect(Collectors.toList());
        messageThreads.forEach(messageThread -> deleteMessageThreadWithRelationalEntities(messageThread));
        return ResponseResult.NoContent(Constants.MESSAGE_ALL_THREADS_DELETE_SUCCESS);
    }
}
