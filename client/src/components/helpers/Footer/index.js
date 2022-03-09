import React from "react";
import "./Footer.css";
import twitterImg from "../../../images/twitter.webp";
import linkedinImg from "../../../images/linkedin.webp";
import fiverrImg from "../../../images/fiverr.webp";
import upworkImg from "../../../images/upwork.webp";
import arrowIcon from "../../../images/arrow.webp";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='socials'>
                    <ul>
                        <li>
                            <a
                                href='https://twitter.com/YaiciNassim'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={twitterImg} alt='Twitter' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/nassimyaici/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={linkedinImg} alt='Twitter' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.fiverr.com/niimou?public_mode=true'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={fiverrImg} alt='Twitter' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.upwork.com/freelancers/~01544a9e14bfeb0d6a'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={upworkImg} alt='Twitter' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    NASSIM YAICI <span>&copy; 2021</span>
                </div>
            </div>
            <div
                className='arrow-up'
                onClick={() => {
                    window.scroll({ top: 0, behavior: "smooth" });
                }}
            >
                <img src={arrowIcon} alt='Up Arrow' />
            </div>
        </footer>
    );
};

export default Footer;
