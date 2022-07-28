import React from "react";
import { useSelector } from "react-redux";

import "./ImagePreview.css";

import closeIcon from "../../../images/close.webp";

const ImagePreview = ({ reference }) => {
    const image = useSelector(
        (state) => state.row[state.row.type !== "project" ? "icon" : "preview"]
    );

    return (
        <div className='image-preview' ref={reference}>
            <div className='wrapper'>
                <img
                    className='close'
                    src={closeIcon}
                    alt='Close'
                    onClick={(e) => {
                        reference.current.style.display = "none";
                    }}
                />
                <img className='preview' src={image} alt='preview' />
            </div>
        </div>
    );
};

export default ImagePreview;
