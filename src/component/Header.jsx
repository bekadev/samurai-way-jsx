import React from 'react';
import {Box, AppBar, Toolbar, Container, Typography, Button} from "@mui/material";

export const Header = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            <Button style={{marginRight: '20px'}} variant={"outlined"} color="inherit">Profile</Button>
                        </Typography>
                        <Typography variant="h6" component="div">
                            <Button style={{marginRight: '20px'}} variant={"outlined"}
                                    color="inherit">Messages</Button>
                        </Typography>
                        <Typography variant="h6" component="div">
                            <Button style={{marginRight: '20px'}} variant={"outlined"} color="inherit">News</Button>
                        </Typography>
                        <Typography variant="h6" component="div">
                            <Button style={{marginRight: '20px'}} variant={"outlined"} color="inherit">Music</Button>
                        </Typography>
                        <Typography variant="h6" component="div">
                            <Button style={{marginRight: '20px'}} variant={"outlined"} color="inherit">Settings</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};