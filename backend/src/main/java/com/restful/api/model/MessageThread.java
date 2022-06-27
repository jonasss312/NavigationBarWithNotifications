package com.restful.api.model;

import javax.persistence.*;

@Entity
public class MessageThread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String time;
    @Column
    private String summary;
    @Column
    private int seen;

    public MessageThread(String time, String summary, int seen) {
        this.time = time;
        this.summary = summary;
        this.seen = seen;
    }

    public MessageThread() {

    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public int getSeen() {
        return seen;
    }

    public void setSeen(int seen) {
        this.seen = seen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
