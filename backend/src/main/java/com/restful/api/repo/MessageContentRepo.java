package com.restful.api.repo;

import com.restful.api.model.MessageContent;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface MessageContentRepo extends JpaRepository<MessageContent, Integer> {
    List<MessageContent> findByIdAndMessageThreadId(int id, int messageThreadId);
    List<MessageContent> findByMessageThreadId(int messageThreadId);
    @Transactional
    Long deleteByMessageThreadId(int messageThreadId);

}
