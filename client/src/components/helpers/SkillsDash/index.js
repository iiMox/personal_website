import React from "react";
import { useSelector } from "react-redux";
import "./SkillsDash.css";

import CommonDash from "../CommonDash";

const SkillsDash = () => {
    const skills = useSelector((state) => state.skills.skills);
    return (
        <div className='skills-content'>
            <CommonDash title='Skills' skills={skills} />
        </div>
    );
};

export default SkillsDash;
