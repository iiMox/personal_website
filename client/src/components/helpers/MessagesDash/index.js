import React from "react";
import { useSelector } from "react-redux";
import "./MessagesDash.css";

import CommonDash from "../CommonDash";

const MessagesDash = () => {
    const messages = useSelector((state) => state.messages.messages);

    return (
        <div className='messages-content'>
            <CommonDash title='Messages' messages={messages} />
        </div>
    );
};

export default MessagesDash;
