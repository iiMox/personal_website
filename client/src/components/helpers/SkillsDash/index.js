import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SkillsDash.css";

import CommonDash from "../CommonDash";

const SkillsDash = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            getSkills();
        }
    });

    const getSkills = async () => {
        const res = await axios.get("/skill", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setSkills(res.data);
        setLoading(false);
    };

    return (
        <div className='skills-content'>
            <CommonDash title='Skills' skills={skills} skillLoading={loading} />
        </div>
    );
};

export default SkillsDash;
