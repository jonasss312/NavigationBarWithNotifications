package com.restful.api.model;

import javax.persistence.*;

@Entity
public class MessageContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String content;
    @Column
    private int messageThreadId;

    public MessageContent(String content, int messageThreadId) {
        this.content = content;
        this.messageThreadId = messageThreadId;
    }

    public MessageContent() {

    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getMessageThreadId() {
        return messageThreadId;
    }

    public void setMessageThreadId(int messageThreadId) {
        this.messageThreadId = messageThreadId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
