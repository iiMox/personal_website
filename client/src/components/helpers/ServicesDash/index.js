import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ServicesDash.css";

import CommonDash from "../CommonDash";

const ServicesDash = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            getServices();
        }
    });

    const getServices = async () => {
        const res = await axios.get("/service", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setServices(res.data);
        setLoading(false);
    };

    return (
        <div className='services-content'>
            <CommonDash
                title='Services'
                services={services}
                serviceLoading={loading}
            />
        </div>
    );
};

export default ServicesDash;
