import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from "react";
import { useNotificationButton } from "./useNotificationButton";
import { NotificationsWindow } from "../../component/notifications-window/NotificationsWindow";

export const NotificationButton = () => {
    const { toggleNotifications, toggle, notifications, deleteThread, seeThread, newNotificationsCount, deleteAllThreads } = useNotificationButton();

    const renderMessages = () => {
        if (toggle)
            return <NotificationsWindow notifications={notifications} toggleNotifications={toggleNotifications} deleteThread={deleteThread} seeThread={seeThread} deleteAllThreads={deleteAllThreads} />;
        return <></>;
    }

    const renderIcon = () => <IconButton onClick={() => toggleNotifications()} size="small" color="inherit">
        <Badge badgeContent={newNotificationsCount} sx={{
            color: toggle ? "white" : "gray",
            backgroundColor: 'transparent'
        }} >
            <NotificationsIcon />
        </Badge>
    </IconButton >

    return (
        <>
            {renderIcon()}
            {renderMessages()}
        </>
    );
};