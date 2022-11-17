import React from 'react';
import {Box, AppBar, Toolbar, Container, Typography, Button} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile";
import {Dialogs} from "./Dialogs";

export const Header = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <NavLink to={'/component/Profile'}>
                                <Typography variant="h6" component="div">
                                    <Button style={{marginRight: '20px', color: 'white'}} variant={"outlined"}
                                            color="inherit">Profile</Button>
                                </Typography>
                            </NavLink>
                            <NavLink to={'/component/Dialogs'} style={{textDecoration: 'none'}}>
                                <Typography variant="h6" component="div">
                                    <Button style={{marginRight: '20px', color: 'white'}} variant={"outlined"}
                                            color="inherit">Dialogs</Button>
                                </Typography>
                            </NavLink>
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

            <Routes>
                <Route path={'/component/Profile'} element={<Profile/>}/>
            </Routes>
            <Routes>
                <Route path={'/component/Dialogs'} element={<Dialogs />}/>
            </Routes>
        </div>

)
    ;
};