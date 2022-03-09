import React from "react";
import { useRef } from "react";
import NavItem from "../NavItem";
import "./Navbar.css";

const Navbar = () => {
    const items = [
        { id: 1, item: "about", text: "About" },
        { id: 2, item: "services", text: "Services" },
        { id: 3, item: "gallery", text: "Gallery" },
        { id: 4, item: "contact", text: "Contact us" },
    ];

    const ulHover = useRef(null);

    const onHover = (li) => {
        ulHover.current.style.left = li.offsetLeft + "px";
        ulHover.current.style.width = li.offsetWidth + "px";
        ulHover.current.style.height = li.offsetHeight + "px";
        ulHover.current.style.bottom = 0;
        li.style.color = "#fff";
    };

    const offHover = (li) => {
        ulHover.current.style.height = "0px";
        li.style.color = "#af4eff";
    };
    return (
        <nav>
            <div className='container'>
                <div className='links'>
                    <ul>
                        {items.map((item) => {
                            return (
                                <NavItem
                                    key={item.id}
                                    item={item.item}
                                    text={item.text}
                                    onHover={onHover}
                                    offHover={offHover}
                                />
                            );
                        })}
                        <div className='ul-hover' ref={ulHover}></div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
