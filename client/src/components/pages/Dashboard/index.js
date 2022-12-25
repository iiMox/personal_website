import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllSkills } from "../../actions/skill";
import { getAllServices } from "../../actions/service";
import { getAllProjects } from "../../actions/project";
import { getAllMessages } from "../../actions/message";
import "./Dashboard.css";

import Loading from "../../helpers/Loading";
import SkillsDash from "../../helpers/SkillsDash";
import ServicesDash from "../../helpers/ServicesDash";
import ProjectsDash from "../../helpers/ProjectsDash";
import MessagesDash from "../../helpers/MessagesDash";
import Close from "../../helpers/Close";

import logo from "../../../images/logo_white.webp";
import menuIcon from "../../../images/menu_white.webp";
import skillsIcon from "../../../images/skills.webp";
import servicesIcon from "../../../images/services.webp";
import projectsIcon from "../../../images/projects.webp";
import messagesIcon from "../../../images/chat.webp";

const Dashboard = () => {
    const [category, setCategory] = useState(0);
    const [loading, setLoading] = useState(true);

    let menuRef = useRef(null);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    useEffect(() => {
        if (loading) {
            dispatch(getAllSkills());
            dispatch(getAllServices());
            dispatch(getAllProjects());
            dispatch(getAllMessages());
            setLoading(false);
        }
    }, [dispatch, loading]);

    const hideSmallMenu = () => {
        if (window.innerWidth <= 767.98) {
            menuRef.current.style.right = "100%";
        }
    };

    const showSmallMenu = () => {
        if (window.innerWidth <= 767.98) {
            menuRef.current.style.right = "0";
        }
    };

    const onListItemClick = (category) => {
        hideSmallMenu();
        setCategory(category);
    };

    return isAuthenticated ? (
        loading ? (
            <Loading />
        ) : (
            <div className='dashboard'>
                <div className='sidebar'>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='menu' onClick={showSmallMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul ref={menuRef}>
                        <Close reference={menuRef} />
                        <li
                            onClick={(e) => {
                                onListItemClick(0);
                            }}
                        >
                            <img src={skillsIcon} alt='Skills' />
                            Skills
                        </li>
                        <span></span>
                        <li
                            onClick={(e) => {
                                onListItemClick(1);
                            }}
                        >
                            <img src={servicesIcon} alt='Services' />
                            Services
                        </li>
                        <span></span>
                        <li
                            onClick={(e) => {
                                onListItemClick(2);
                            }}
                        >
                            <img src={projectsIcon} alt='Projects' />
                            Projects
                        </li>
                        <span></span>
                        <li
                            onClick={(e) => {
                                onListItemClick(3);
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
        )
    ) : (
        <Navigate to='/login' />
    );
};

export default Dashboard;
