import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./Center.css";
import ChatCard from "./ChatCard";

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
                    style={{marginRight: "2rem", fontWeight: "bold", color: "white", backgroundColor: "#47c8bf"}}>
                        Chats
                </Typography>
                <Typography 
                    className="navitem" 
                    style={{fontWeight: "bold"}}>
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
