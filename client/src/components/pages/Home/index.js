import React from "react";
import "./Home.css";
import Navbar from "../../helpers/Navbar";
import Slider from "../../helpers/Slider";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Slider />
        </div>
    );
};

export default Home;
