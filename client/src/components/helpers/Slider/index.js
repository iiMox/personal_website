import React from "react";
import { useEffect } from "react";
import "./Slider.css";
import SliderImg from "../../../images/slider_image.webp";

const Slider = () => {
    useEffect(() => {
        const navSize = document.querySelector(".home nav").offsetHeight;

        const slider = document.querySelector(".home .slider");

        slider.style.height = window.innerHeight - navSize + "px";
    });

    return (
        <div className='slider'>
            <div className='container'>
                <div className='content'>
                    <h1>Looking for Digital Magic?</h1>
                    <p>
                        Discover the enchantment of digital experiences. We
                        craft custom websites using the latest technologies to
                        captivate your audience.
                    </p>
                </div>
                <div className='image-box'>
                    <img src={SliderImg} alt='Slider' />
                </div>
            </div>
        </div>
    );
};

export default Slider;
