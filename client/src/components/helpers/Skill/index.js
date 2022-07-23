import React from "react";
import { useEffect, useState } from "react";
import "./Skill.css";

const Skill = ({ skill, icon, order, maxOrder }) => {
    const [orderValue, setOrderValue] = useState(order + 1);

    useEffect(() => {
        const swap = setInterval(() => {
            orderValue > 0
                ? setOrderValue(orderValue - 1)
                : setOrderValue(maxOrder);
        }, 3000);

        document.addEventListener("visibilitychange", () => {
            setOrderValue(orderValue);
        });
        return () => {
            clearInterval(swap);
        };
    }, [orderValue, maxOrder, order]);

    return (
        <div
            className='skill-box'
            data-order={orderValue}
            style={{
                left: `${
                    orderValue === 0
                        ? -25
                        : orderValue === maxOrder
                        ? maxOrder * 25
                        : (orderValue - 1) * 25
                }%`,
                transition: `left ${
                    orderValue === maxOrder ? 0 : 0.3
                }s ease-in-out`,
            }}
        >
            <img src={icon} alt={skill} />
            <h5>{skill}</h5>
        </div>
    );
};

export default Skill;
