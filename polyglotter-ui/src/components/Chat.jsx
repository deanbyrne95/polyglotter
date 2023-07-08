import {Fragment, useEffect, useRef, useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {AttachFile, MoreVert, SearchOutlined} from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from "./axios";

import "./Chat.css";
import {formatDate} from "../App.jsx";

const Chat = ({messages, user}) => {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const bottom = useRef(null);

    const scrollToBottom = () => {
        bottom?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: user?.email,
            timestamp: new Date().toUTCString(),
            received: true,
        }).then(() => scrollToBottom());
        setInput("");
    };

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        scrollToBottom();
    }, []);

    const timestamps = Array.from(
        new Set(messages.map(m => formatDate(m.timestamp, 'DD MMM YYYY')))
    )

    function sortByDate(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    return (
        <div className="chat d-flex">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Dev Help</h3>
                    <p>Last seen at {formatDate(messages[messages.length - 1]?.timestamp, "DD MMM YYYY @ HH:mm")}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {/*{messages
                    .filter((m) => filterByTimestamp(m.timestamp))
                    .sort((a, b) => sortByDate(a, b))
                    .map((message) => (
                    <div>
                        <span className="">{message.timestamp}</span>
                    </div>
                ))}*/}
                {timestamps.map(timestamp => (
                    <Fragment>
                        <div className="center">
                            <span className="chat-date">{timestamp}</span>
                        </div>
                        {messages
                            .filter(m => formatDate(m.timestamp, "DD MMM YYYY") === timestamp)
                            .map(message => (
                                <Fragment>
                                    <div key={message.timestamp}
                                         className={`chat__message ${
                                             message.name === user?.email && "chat__receiver"
                                         }`}
                                    >
                                        <span className="chat__name">{user.displayName}</span>
                                        {message.message}
                                        <span className="d-inline-block font-xxs m-1">{formatDate(message.timestamp, "HH:mm")}</span>
                                    </div>
                                    <div ref={bottom}></div>
                                </Fragment>
                            ))}
                    </Fragment>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
};

export default Chat;
