import React from "react";
import "./NavItem.css";

const NavItem = ({ item, text, onHover, offHover }) => {
    return (
        <li
            data-scroll={item}
            onMouseEnter={(e) => onHover(e.target)}
            onMouseLeave={(e) => offHover(e.target)}
            onClick={() => {
                window.scrollTo({
                    top: document.getElementById("contact").offsetTop - 100,
                    behavior: "smooth",
                });
            }}
        >
            {text}
        </li>
    );
};

export default NavItem;
