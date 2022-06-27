import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import { Notification } from "../notification/Notification";
import { ViewMessageThread } from "../../../controller/model/ViewMessageThread";

interface Props {
    notifications: ViewMessageThread[] | undefined;
    toggleNotifications: (arg0: Boolean) => void;
    deleteThread: (id: number) => void;
    seeThread: (id: number) => void;
    deleteAllThreads: () => void;
}

export const NotificationsWindow = (props: Props) => {
    const { notifications, toggleNotifications, deleteThread, seeThread, deleteAllThreads } = props;

    const renderFetchedNotifications = () => <>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', maxHeight: window.screen.height * 0.6, overflow: 'auto' }}>
            {renderText("Hendelser")}
            {notifications?.map(notification => <>
                <Notification key={notification.getId()} notification={notification} deleteThread={deleteThread} seeThread={seeThread} /> </>)}
            {renderText("Clear All", deleteAllThreads)}
        </Box>
    </>

    const renderText = (text: string, onClick?: () => void) => <Typography align='center' onClick={() => onClick ? onClick() : {}} variant='h6'
        sx={{ fontWeight: onClick ? 500 : 700, padding: '10px', color: onClick ? 'gray' : 'black' }}>
        {text}
    </Typography>

    const renderNotifications = () => {
        if (!notifications)
            return <CircularProgress sx={{ margin: '10px' }} />;
        if (notifications.length === 0) {
            return renderText("You have no notifications");
        }
        return renderFetchedNotifications();
    }

    return (
        <>
            <div onClick={() => { toggleNotifications(false) }}
                style={{ position: 'fixed', width: window.screen.width, height: window.screen.height, top: '0px', right: '0px', zIndex: 0, opacity: 0 }} />
            <Paper sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', position: 'fixed', top: '50px', right: '10px', zIndex: 1, opacity: 1 }}>
                {renderNotifications()}
            </Paper>
        </>
    );
};