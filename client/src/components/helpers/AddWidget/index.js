import React from "react";
import { useRef } from "react";
import "./AddWidget.css";

import iconImg from "../../../images/slider_image.webp";
import closeIcon from "../../../images/close.webp";
import saveIcon from "../../../images/save.webp";

const AddWidget = ({ section, reference }) => {
    const inputRef = useRef(null);

    return (
        <div className='add-widget' ref={reference}>
            <div className='wrapper'>
                <img
                    className='close'
                    src={closeIcon}
                    alt='Close'
                    onClick={(e) => {
                        reference.current.style.display = "none";
                    }}
                />
                <h2>{`Add ${section.slice(0, section.length - 1)}`}</h2>
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
                            <div className='group'>
                                <label>Icon</label>
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
                                    <img src={iconImg} alt='Icon' />
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    <button>
                        <img src={saveIcon} alt='Save' />
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddWidget;
