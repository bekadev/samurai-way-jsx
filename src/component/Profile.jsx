import React, {useState} from 'react';
import {Box, Container, List, ListItem, Divider, ListItemAvatar, Avatar, ListItemText, Typography} from "@mui/material";
import {Posts} from "./Posts";
import s from './styles/Profile.module.css'
import {v1} from "uuid";

export const Profile = () => {
    let [posts, setPosts] = useState([
        {id: v1(), posts: 'Recent incidents at airports suggest that carrying your child’s birth certificate, passport or other documents will help mitigate alarming, and often time-consuming, incidents in security.'},
        {id: v1(), posts: 'The small country in southeastern Africa is leveraging its little-known rock cliffs and boulders to develop local interest in climbing — and to draw adventure tourists.'},
        {id: v1(), posts: 'For an Italian tour that messes nicely with tradition, head to Naples, the birthplace of pizza, where some masterful pizzaioli have elevated this humble treasure to tasting-menu status.'},
    ])
    const addPosts = (title) => {
        let newPosts = {posts: title}
        setPosts([newPosts, ...posts])
    }
    return (
        <Container maxWidth="xl">
            <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}} style={{padding: '20px'}}>
                <img
                    src="https://mixpack.ee/wp-content/uploads/revslider/slider-hardware/black-electronics-s-1-bg.jpg"
                    style={{width: '100%', height: '220px', alignItems: 'center'}} alt=""/>
                <div className={s.flex}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '20px 0' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Bekzat K" src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="~Bekzat K~"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Date of Birth: 22 feburary
                                        </Typography>
                                        <br/>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            City: Almaty
                                        </Typography>
                                        <br/>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Education: KAU'20
                                        </Typography>
                                        <br/>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Web Site: bekadev.kz
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    <div>
                        <Posts addPosts={addPosts} />
                        {posts.map((el,index)=>{
                            return(
                                <div className={s.posts}>
                                    <Avatar alt="Bekzat K" src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" />
                                    <div className={s.post} key={el.id}>
                                        {el.posts}
                                    </div>
                                </div>


                            )
                        })}
                    </div>
                </div>
            </Box>
        </Container>
    );
};
