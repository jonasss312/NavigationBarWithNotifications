package com.restful.api;

public class Constants {
    public static final String MESSAGE_THREAD_PATH = "/message_threads";
    public static final String MESSAGE_CONTENT_PATH = "/message_contents";
    public static final String CREATE_FAKE_DATA_PATH = "/create_fake_data";
    public static final String MESSAGE_THREAD_GET_ERROR = "Cannot find message thread.";
    public static final String MESSAGE_CONTENT_GET_ERROR = "Cannot find message content.";
    public static final String MESSAGE_THREAD_POST_ERROR = "Summary and time required.";;
    public static final String MESSAGE_CONTENT_POST_ERROR = "Content required.";
    public static final String MESSAGE_THREAD_DELETE_SUCCESS = "Deleted message thread.";
    public static final String MESSAGE_ALL_THREADS_DELETE_SUCCESS = "Deleted all message threads.";
    public static final String MESSAGE_CONTENT_DELETE_SUCCESS = "Deleted message content.";
    public static final String MESSAGE_FAKE_DATA_SUCCESS = "Fake data added.";
}
