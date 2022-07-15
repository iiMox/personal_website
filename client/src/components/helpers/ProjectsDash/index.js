import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectsDash.css";

import CommonDash from "../CommonDash";

const ProjectsDash = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            getProjects();
        }
    });

    const getProjects = async () => {
        const res = await axios.get("/project", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        setProjects(res.data);
        setLoading(false);
    };

    return (
        <div className='projects-content'>
            <CommonDash
                title='Projects'
                projects={projects}
                projectLoading={loading}
            />
        </div>
    );
};

export default ProjectsDash;
