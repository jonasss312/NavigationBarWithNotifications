import { Toolbar, AppBar, Box } from "@mui/material";
import React from "react";
import { NotificationButton } from "../../container/notification-button/NotificationButton";

export const NavigationBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#222021' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <NotificationButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
};