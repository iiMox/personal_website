import React from "react";
import "./Home.css";
import Navbar from "../../helpers/Navbar";
import Slider from "../../helpers/Slider";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";
import Footer from "../../helpers/Footer";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Slider />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
