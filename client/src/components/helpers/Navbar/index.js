import React from "react";
import { useRef } from "react";
import NavItem from "../NavItem";
import "./Navbar.css";
import menuIcon from "../../../images/menu.webp";
import logoImg from "../../../images/logo.webp";
import closeIcon from "../../../images/close.webp";

const Navbar = () => {
    const items = [
        { id: 1, item: "about", text: "About" },
        { id: 2, item: "services", text: "Services" },
        { id: 3, item: "gallery", text: "Gallery" },
        { id: 4, item: "contact", text: "Contact us" },
    ];

    const ulHover = useRef(null);
    const linksRef = useRef(null);

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
                <div className='logo'>
                    <img src={logoImg} alt='Logo' />
                </div>
                <div className='menu-icon'>
                    <img
                        src={menuIcon}
                        alt='Menu'
                        onClick={() => {
                            document
                                .querySelector("nav .hidden-menu")
                                .classList.remove("hide");
                        }}
                    />
                </div>
                <div className='hidden-menu hide'>
                    <img
                        className='close-icon'
                        src={closeIcon}
                        alt='Close'
                        onClick={() => {
                            document
                                .querySelector("nav .hidden-menu")
                                .classList.add("hide");
                        }}
                    />
                    <ul>
                        {items.map((item) => {
                            return (
                                <li
                                    onClick={() => {
                                        document
                                            .querySelector("nav .hidden-menu")
                                            .classList.add("hide");
                                        window.scrollTo({
                                            top:
                                                document.getElementById(
                                                    item.item
                                                ).offsetTop - 100,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='links' ref={linksRef}>
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
