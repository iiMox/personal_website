import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Skill.css";

const Skill = ({ skill, icon, order, maxOrder }) => {
    const [orderValue, setOrderValue] = useState(order + 1);

    const carousel = useSelector((state) => state.carousel);

    useEffect(() => {
        let swap;

        if (carousel) {
            swap = setInterval(() => {
                orderValue > 0
                    ? setOrderValue(orderValue - 1)
                    : setOrderValue(maxOrder);
            }, 2000);
        } else {
            clearInterval(swap);
        }

        /* document.addEventListener("visibilitychange", () => {
            setOrderValue(orderValue);
        }); */
        return () => {
            clearInterval(swap);
        };
    }, [orderValue, maxOrder, order, carousel]);

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
                    orderValue === maxOrder ? 0 : 0.2
                }s ease-in-out`,
            }}
        >
            <img src={icon} alt={skill} />
            <h5>{skill}</h5>
        </div>
    );
};

export default Skill;
