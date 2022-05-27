import React from "react";
import "./Skill.css";

const Skill = ({ skill, icon, level }) => {
    return (
        <div className='skill-box'>
            <div className='skill-title'>
                <img src={icon} alt={skill} />
                <h5>{skill}</h5>
            </div>
            <div className='progress'>
                <span style={{ width: level }}></span>
            </div>
        </div>
    );
};

export default Skill;
