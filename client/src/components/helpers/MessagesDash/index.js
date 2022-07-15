import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./MessagesDash.css";

import CommonDash from "../CommonDash";

const MessagesDash = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            getMessages();
        }
    });

    const getMessages = async () => {
        const res = await axios.get("/message", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        setMessages(res.data);
        setLoading(false);
    };

    return (
        <div className='messages-content'>
            <CommonDash
                title='Messages'
                messages={messages}
                messageLoading={loading}
            />
        </div>
    );
};

export default MessagesDash;
