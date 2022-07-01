import React from "react";
import { useState } from "react";
import "./Dashboard.css";

import SkillsDash from "../../helpers/SkillsDash";
import ServicesDash from "../../helpers/ServicesDash";
import ProjectsDash from "../../helpers/ProjectsDash";
import MessagesDash from "../../helpers/MessagesDash";

import skillsIcon from "../../../images/skills.webp";
import servicesIcon from "../../../images/services.webp";
import projectsIcon from "../../../images/projects.webp";
import messagesIcon from "../../../images/chat.webp";

const Dashboard = () => {
    const [category, setCategory] = useState(0);
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <ul>
                    <li
                        onClick={(e) => {
                            setCategory(0);
                        }}
                    >
                        <img src={skillsIcon} alt='Skills' />
                        Skills
                    </li>
                    <li
                        onClick={(e) => {
                            setCategory(1);
                        }}
                    >
                        <img src={servicesIcon} alt='Services' />
                        Services
                    </li>
                    <li
                        onClick={(e) => {
                            setCategory(2);
                        }}
                    >
                        <img src={projectsIcon} alt='Projects' />
                        Projects
                    </li>
                    <li
                        onClick={(e) => {
                            setCategory(3);
                        }}
                    >
                        <img src={messagesIcon} alt='Messages' />
                        Messages
                    </li>
                </ul>
                <div className='down'>
                    <div className='line-left'></div>
                    <div className='circle'></div>
                    <div className='line-right'></div>
                </div>
            </div>
            <div className='content'>
                {category === 0 ? (
                    <SkillsDash />
                ) : category === 1 ? (
                    <ServicesDash />
                ) : category === 2 ? (
                    <ProjectsDash />
                ) : (
                    <MessagesDash />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
