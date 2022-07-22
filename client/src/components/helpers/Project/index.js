import React from "react";
import { useRef } from "react";
import "./Project.css";

const Project = ({ title, link, imageURL }) => {
    const hoverRef = useRef(null);

    return (
        <div
            className='project'
            onMouseEnter={() => {
                hoverRef.current.classList.add("active");
                hoverRef.current.parentNode.classList.add("animation");
            }}
            onMouseLeave={() => {
                hoverRef.current.classList.remove("active");
                hoverRef.current.parentNode.classList.remove("animation");
            }}
            onClick={(e) => {
                window.open(link, "_blank");
            }}
        >
            <div className='img-overflow ' ref={hoverRef}>
                <div>
                    <h5>{title}</h5>
                </div>
            </div>
            <img src={imageURL} alt={title} />
        </div>
    );
};

export default Project;
