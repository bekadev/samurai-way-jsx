import React, {useState} from 'react';
import {Typography, TextField,Button } from "@mui/material";

export const Posts = (props) => {
    let [title, setTitle] = useState('')
    const onChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addPosts(title)
        setTitle('')
    }
    return (
        <div style={{margin: '10px 25px 30px'}}>
            <Typography
                sx={{ display: 'inline', fontWeight: '500', fontSize: '30px', fontFamily: "Montserrat"}}
                component="span"
                variant="body2"
                color="text.primary"
            >
                My posts
            </Typography>
            <br/>
            <TextField onChange={onChangeHandler} value={title} id="outlined-basic" label="your news..." variant="outlined" style={{width: '900px'}}/>
            <Button onClick={onClickHandler} style={{marginTop: '20px', position: 'absolute', right: '0'}} variant="contained">Sent</Button>
        </div>
    );
};