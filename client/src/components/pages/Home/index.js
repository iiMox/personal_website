import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import axios from "axios";

import "./Home.css";
import Loading from "../../helpers/Loading";
import Navbar from "../../helpers/Navbar";
import Slider from "../../helpers/Slider";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";
import Footer from "../../helpers/Footer";

const Home = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [skills, setSkills] = useState([]);

    const [services, setServices] = useState([]);

    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        try {
            const resSkills = await axios.get("/skill");

            setSkills([...resSkills.data]);

            const resService = await axios.get("/service");

            setServices([...resService.data]);

            const resProjects = await axios.get("/project");

            setProjects([...resProjects.data]);

            setLoading(false);
        } catch (e) {}
    };

    useEffect(() => {
        fetchData();
    }, [loading]);

    useEffect(() => {
        dispatch(logout());
    });

    return loading ? (
        <Loading />
    ) : (
        <div className='home'>
            <Navbar />
            <Slider />
            <About />
            <Services skills={skills} services={services} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
