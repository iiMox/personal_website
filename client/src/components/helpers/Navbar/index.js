import React from "react";
import { useEffect, useRef } from "react";
import NavItem from "../NavItem";
import "./Navbar.css";
import menuIcon from "../../../images/menu.webp";

const Navbar = () => {
    useEffect(() => {
        if (window.innerWidth < 576) {
            linksRef.current.className = `${linksRef.current.className} hide`;
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth < 576) {
                if (linksRef.current.className.includes("hide")) {
                    linksRef.current.style.height = 0;
                } else {
                    linksRef.current.style.height =
                        document.querySelector("nav .links ul").offsetHeight +
                        "px";
                }
            } else {
                linksRef.current.className = `links hide`;
                linksRef.current.style.height =
                    document.querySelector("nav .links ul").offsetHeight +
                    10 +
                    "px";
            }
        });
    });

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
                <div className='menu'>
                    <img
                        src={menuIcon}
                        alt='Menu'
                        onClick={() => {
                            if (
                                linksRef.current.style.height === "0px" ||
                                linksRef.current.style.height === ""
                            ) {
                                linksRef.current.className = "links";
                                linksRef.current.style.height =
                                    document.querySelector("nav .links ul")
                                        .offsetHeight + "px";
                            } else {
                                linksRef.current.style.height = 0;
                                linksRef.current.className = `${linksRef.current.className} hide`;
                            }
                        }}
                    />
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
