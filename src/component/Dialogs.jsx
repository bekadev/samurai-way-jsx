import React, {useState} from 'react';
import {Box, Container, List, ListItem, Checkbox, ListItemButton, ListItemAvatar, Avatar, ListItemText} from "@mui/material";
import {v1} from "uuid";

export const Dialogs = () => {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    let users = [
        'Beka', 'Alex', 'Ayan', 'Aldik', 'Sasha', 'Tom', 'Ghoust', 'Messi'
    ];

    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}} style={{padding: '20px'}}>
                    <p style={{ display: 'inline', fontWeight: '500', fontSize: '30px', fontFamily: "Montserrat"}}>Dialogs</p>
                    <hr/>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <List  dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {users.map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <ListItem
                                        key={value}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                onChange={handleToggle(value)}
                                                checked={checked.indexOf(value) !== -1}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar n°${value + 1}`}
                                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={`Users ${value}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <div style={{borderRight: '1px solid #9a9a9a', marginLeft: '30px'}}></div>
                        <div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', marginLeft: '20px', alignItems: 'center'}}>
                                <div>
                                    <Avatar alt="Kyzyrbayev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU" />
                                    <p style={{fontSize: '10px'}}>Kyzyrbayev</p>
                                </div>
                                <div style={{border: '2px solid #9a9a9a', borderRadius: '15px', padding: '15px', marginLeft: '20px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
};



