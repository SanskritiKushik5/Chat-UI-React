import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./Center.css";
import ChatCard from "./ChatCard";
import SearchIcon from '@material-ui/icons/Search';

const Center = () => {
    return (
        <Grid sm={4} className="center">
            <Typography className="heading">Profile Matchs & Chats</Typography>
            <Grid item className="nav">
                <Typography 
                    className="navitem" 
                    style={{marginRight: "2rem", fontWeight: "bold"}}>
                        Matches
                </Typography>
                <Typography 
                    className="navitem" 
                    style={{marginRight: "2rem", fontWeight: "bold"}}>
                        Chats
                </Typography>
                <Typography 
                    className="navitem" 
                    style={{fontWeight: "bold"}}>
                        <SearchIcon color="inherit"/>
                        Search
                </Typography>
            </Grid>
            <Grid item className="sideChat" style={{marginTop: "1rem"}}>
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
            </Grid>
        </Grid>
    )
}

export default Center
