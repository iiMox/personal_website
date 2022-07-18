import React from "react";
import { useSelector } from "react-redux";
import "./ProjectsDash.css";

import CommonDash from "../CommonDash";

const ProjectsDash = () => {
    const projects = useSelector((state) => state.projects.projects);

    return (
        <div className='projects-content'>
            <CommonDash title='Projects' projects={projects} />
        </div>
    );
};

export default ProjectsDash;
