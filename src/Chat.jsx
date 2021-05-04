import React from 'react'
import { Avatar, IconButton, Typography } from '@material-ui/core'
import { AttachFile } from '@material-ui/icons'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import "./Chat.css";

const Chat = () => {
    return (
    <div className="chat">
        <div className="chat__header">
            <Avatar />
            <div className="chat__headerInfo">
                <Typography color="inherit" style={{fontWeight: "bolder"}}>Company 3</Typography>
                <Typography variant="body2" style={{color: "#47c8bf", fontWeight: "bold"}} >Last online 1 hour before</Typography>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <Typography color="inherit" className="chat__message">
                Sending you
            </Typography>
        </div>
        
        <div className="chat__footer">
            <form>
                <input
                    placeholder="Type message here"
                    type="text"
                />
                <button type="submit">
                    <SendOutlinedIcon style={{color: "#47c8bf"}}/>
                </button>
            </form>
            <IconButton><InsertEmoticonOutlinedIcon style={{color: "#47c8bf"}}/></IconButton>
        </div> 
    </div>
    )
}

export default Chat
