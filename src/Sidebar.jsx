import React from 'react'
import "./Sidebar.css";
import { Grid, Typography, Avatar } from "@material-ui/core";
import ListMenu from "./ListMenu";

const Sidebar = () => {
    return (
        <Grid sm={2} className="sidebar">
            <Grid item className="profile">
                <Avatar/>
                <Typography variant="h6">Candidate Name</Typography>
                <Typography variant="subtitle2">
                    <span style={{color: "#47c8bf", textDecoration: "underline", fontWeight: "bolder"}}>Edit Profile</span> | <span style={{color: "#47c8bf", textDecoration: "underline", fontWeight: "bolder"}}>Settings</span></Typography>
            </Grid>
            <Grid item>
                <ListMenu />
            </Grid>
        </Grid>
    )
}

export default Sidebar
