import React from "react";
import "./DeleteWidget.css";

const DeleteWidget = ({ reference }) => {
    return (
        <div className='delete-widget' ref={reference}>
            <div className='wrapper'>
                <h3>Proceed With Operation</h3>
                <div className='buttons'>
                    <button className='true'>True</button>
                    <button
                        className='false'
                        onClick={(e) => {
                            e.preventDefault();
                            reference.current.style.display = "none";
                        }}
                    >
                        False
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteWidget;
