import { Box, Button } from "@mui/material";
import React from "react";
import { useHomeWindow } from "./useHomeWindow";

export const HomeWindow = () => {
  const { fakeData } = useHomeWindow();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button sx={{ padding: '20px' }} onClick={() => { fakeData() }}>INSERT FAKE DATA</Button>
    </Box>
  );
};