import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import "./ChatCard.css";

const ChatCard = () => {
    return (
        <Card className="card" style={{borderRadius: 12, padding: "1rem", marginTop: "0.7rem"}}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className="avatar">
                    R
                </Avatar>
                }
                action={
                <Typography>1 min ago</Typography>
                }
                title="Company 1"
                subheader="Last online 1 min before"
            />
            <CardContent>
                <Typography variant="body2">
                    Please consider my video presentation of our project.
                    Do you think the client will like?
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ChatCard
