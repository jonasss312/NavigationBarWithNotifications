package com.restful.api.repo;

import com.restful.api.model.MessageThread;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageThreadRepo extends JpaRepository<MessageThread, Integer> {
}
