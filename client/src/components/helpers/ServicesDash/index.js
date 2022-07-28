import React from "react";
import { useSelector } from "react-redux";
import "./ServicesDash.css";

import CommonDash from "../CommonDash";

const ServicesDash = () => {
    const services = useSelector((state) => state.services.services);

    return (
        <div className='services-content'>
            <CommonDash title='Services' services={services} />
        </div>
    );
};

export default ServicesDash;
