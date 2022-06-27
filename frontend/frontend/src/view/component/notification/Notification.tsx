import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { ViewMessageThread } from "../../../controller/model/ViewMessageThread";
import arrowNotseen from '../../../images/arrow-notseen.svg';
import arrowSeen from '../../../images/arrow-seen.svg';
import X from '../../../images/X.svg';

interface Props {
    notification: ViewMessageThread;
    deleteThread: (id: number) => void;
    seeThread: (id: number) => void;
}

export const Notification = (props: Props) => {
    const { notification, deleteThread, seeThread } = props;

    const renderThread = () => <Box
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '300rem' }}>
        <Typography sx={{ fontSize: 14, fontWeight: 550 }}>
            {notification.getTime()}
        </Typography>
        <Typography sx={{ textDecoration: 'underline', fontWeight: 600 }} >
            {notification.getSummary()}
        </Typography>
    </Box >

    const renderDeleteButton = () => renderButton(<img src={X} />, deleteThread);

    const renderSeeButton = () => {
        if (notification.seen === 0) {
            return renderButton(<img src={arrowNotseen} />, seeThread);
        }
        return renderButton(<img src={arrowSeen} />, seeThread);
    }

    const renderButton = (children: JSX.Element, onclick: (id: number) => void) => <IconButton sx={{ height: '30px', width: '30px' }}
        onClick={() => onclick(notification.id)}>
        {children}
    </IconButton>

    return <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', padding: '5px',
        backgroundColor: notification.isNew() ? "#EBEBEB" : "white"
    }}>
        {renderThread()}
        {renderSeeButton()}
        <div style={{ width: '80%' }} />
        {renderDeleteButton()}
    </Box>;
}