import React from "react";
import { useRef } from "react";
import "./EditWidget.css";

import uploadIcon from "../../../images/upload.webp";
import closeIcon from "../../../images/close.webp";
import saveIcon from "../../../images/save.webp";

const EditWidget = ({ section, reference }) => {
    const inputRef = useRef(null);

    return (
        <div className='edit-widget' ref={reference}>
            <div className='wrapper'>
                <img
                    className='close'
                    src={closeIcon}
                    alt='Close'
                    onClick={(e) => {
                        reference.current.style.display = "none";
                    }}
                />
                <h2>{`Edit ${section.slice(0, section.length - 1)}`}</h2>
                <form>
                    {section.slice(0, section.length - 1).toLowerCase() ===
                    "skill" ? (
                        <>
                            <input type='text' placeholder='Skill' />
                            <input type='text' placeholder='Position' />
                            <div className='group'>
                                <label>Visibility</label>
                                <select>
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </div>
                        </>
                    ) : section.slice(0, section.length - 1).toLowerCase() ===
                      "service" ? (
                        <>
                            <input type='text' placeholder='Service' />
                            <textarea placeholder='Description'></textarea>
                            <input type='text' placeholder='Position' />
                            <div className='group'>
                                <label>Visibility</label>
                                <select>
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            <input type='text' placeholder='Project Title' />
                            <input type='text' placeholder='Link' />
                            <input type='text' placeholder='Position' />
                        </>
                    )}
                    <div className='group'>
                        <label>
                            {section === "Projects" ? "Preview" : "Icon"}
                        </label>
                        <div
                            className='img-box'
                            onClick={(e) => {
                                inputRef.current.click();
                            }}
                        >
                            <input
                                type='file'
                                style={{ display: "none" }}
                                ref={inputRef}
                            />
                            <img
                                className='upload'
                                src={uploadIcon}
                                alt='Icon'
                            />
                        </div>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <img src={saveIcon} alt='Save' />
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditWidget;
