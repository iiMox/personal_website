import React from "react";
import "./Service.css";

const Service = ({ title, description, icon }) => {
    return (
        <div className='service-box'>
            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;
