import React from "react";
import { useEffect, useState } from "react";
import "./Skill.css";

const Skill = ({ skill, icon, order, maxOrder }) => {
    const [orderValue, setOrderValue] = useState(maxOrder);
    const [transform, setTransform] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            orderValue > 1
                ? setOrderValue(orderValue - 1)
                : setOrderValue(orderValue + maxOrder - 1);
            if (maxOrder === order - 1 + orderValue) {
                setOpacity(0);
                setTransform((maxOrder - order) * 100);
            } else {
                setOpacity(1);
                setTransform(transform - 100);
            }
        }, 3000);
    });

    return (
        <div
            className='skill-box'
            data-order={orderValue}
            style={{
                transform: `translateX(${transform}%)`,
                opacity: opacity,
            }}
        >
            <img src={icon} alt={skill} />
            <h5>{skill}</h5>
        </div>
    );
};

export default Skill;
