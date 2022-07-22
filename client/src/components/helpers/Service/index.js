import React from "react";
import "./Service.css";

const Service = ({ title, description, icon }) => {
    return (
        <div className='service-box'>
            <img src={icon} alt={title} />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;
