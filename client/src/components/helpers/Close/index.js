import React from "react";
import "./Close.css";

import closeIcon from "../../../images/close.webp";

const Close = ({ reference }) => {
    return (
        <img
            className='close-icon'
            src={closeIcon}
            alt='Close'
            onClick={() => {
                reference.current.style.right = "100%";
            }}
        />
    );
};

export default Close;
