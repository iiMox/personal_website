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
                    <h1>YOU ASKED FOR A WEB DEVELOPER ?</h1>
                    <p>
                        We are here to help you develop your own website, it'll
                        be a full responsive site using the latest technology in
                        the field.
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
