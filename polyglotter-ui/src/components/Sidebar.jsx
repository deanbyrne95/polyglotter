import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Avatar, IconButton, Tooltip} from "@mui/material";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";

import ExitToAppOutlined from "@mui/icons-material/ExitToAppOutlined";
import React from "react";
import {auth} from "../firebase.js";

const Sidebar = ({messages, user}) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} imgProps={{referrerPolicy: 'no-referrer'}}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    <Tooltip title="Log Out">
                        <IconButton onClick={() => auth.signOut()}>
                            <ExitToAppOutlined/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat messages={messages}/>
            </div>
        </div>
    );
};
export default Sidebar;
