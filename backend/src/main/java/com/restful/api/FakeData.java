package com.restful.api;

import com.restful.api.model.MessageThread;

public class FakeData {
    public static final MessageThread FAKE_MESSAGE_THREAD_1 = new MessageThread("2020-01-01 18:00", "Important!", 0);
    public static final MessageThread FAKE_MESSAGE_THREAD_2 = new MessageThread("2021-01-01 18:00", "Holiday", 0);
    public static final MessageThread FAKE_MESSAGE_THREAD_3 = new MessageThread("2022-01-01 18:00", "Important!", 0);
    public static final String FAKE_MESSAGE_COTENT_1 = "I need you at job tomorrow!";
    public static final String FAKE_MESSAGE_COTENT_2 = "You are allowed to take holidays.";
    public static final String FAKE_MESSAGE_COTENT_3 = "Now we have free wifi.";
}
