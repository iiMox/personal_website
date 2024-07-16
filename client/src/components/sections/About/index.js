import React from "react";
import "./About.css";
import aboutImg from "../../../images/about.webp";

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <h2>ABOUT</h2>
                <div className='content'>
                    <div className='img-holder'>
                        <img src={aboutImg} alt='About' />
                    </div>
                    <p>
                        As a dedicated web developer, I thrive on transforming
                        ideas into engaging online platforms. I offer a blend of
                        creativity and technical expertise to build websites
                        that not only look great but also deliver results.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
