import {useEffect, useState} from "react";
import {Avatar} from "@mui/material";

import "./SidebarChat.css";
import {formatDate} from "../App.jsx";

const SidebarChat = ({messages}) => {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const lastMessage = messages[messages.length - 1];

    return (
        <div className="sidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>Dev Help</h2>
                <p>{lastMessage?.message}</p>
                <span className="font-xxs">{formatDate(lastMessage?.timestamp, 'DD-MMM-YYYY @ HH:mm')}</span>
            </div>
        </div>
    );
};

export default SidebarChat;
