import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import "./AddWidget.css";

import uploadIcon from "../../../images/upload.webp";
import closeIcon from "../../../images/close.webp";
import saveIcon from "../../../images/save.webp";

const AddWidget = ({ section, reference }) => {
    const inputRef = useRef(null);

    const [skill, setSkill] = useState({
        skill: "",
        position: null,
        visibility: false,
    });

    const [service, setService] = useState({
        service: "",
        description: "",
        position: null,
        visibility: false,
    });

    const [project, setProject] = useState({
        title: "",
        position: null,
        link: "",
    });

    let image = "";

    const submit = async () => {
        try {
            let res;
            if (
                section.slice(0, section.length - 1).toLowerCase() === "skill"
            ) {
                res = await axios.post(
                    "/skill",
                    { ...skill, icon: image },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            } else if (
                section.slice(0, section.length - 1).toLowerCase() === "service"
            ) {
                res = await axios.post(
                    "/service",
                    { ...service, icon: image },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            } else {
                res = await axios.post(
                    "/project",
                    { ...skill, preview: image },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            }
        } catch (e) {}
    };

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
                            <input
                                type='text'
                                placeholder='Skill'
                                onChange={(e) => {
                                    setSkill({
                                        ...skill,
                                        skill: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type='text'
                                placeholder='Position'
                                onChange={(e) => {
                                    setSkill({
                                        ...skill,
                                        position: e.target.value,
                                    });
                                }}
                            />
                            <div className='group'>
                                <label>Visibility</label>
                                <select
                                    onChange={(e) => {
                                        setSkill({
                                            ...skill,
                                            visibility: e.target.value,
                                        });
                                    }}
                                >
                                    <option selected disabled></option>
                                    <option value='true'>True</option>
                                    <option value='false'>False</option>
                                </select>
                            </div>
                        </>
                    ) : section.slice(0, section.length - 1).toLowerCase() ===
                      "service" ? (
                        <>
                            <input
                                type='text'
                                placeholder='Service'
                                onChange={(e) => {
                                    setService({
                                        ...service,
                                        service: e.target.value,
                                    });
                                }}
                            />
                            <textarea
                                placeholder='Description'
                                onChange={(e) => {
                                    setService({
                                        ...service,
                                        description: e.target.value,
                                    });
                                }}
                            ></textarea>
                            <input
                                type='text'
                                placeholder='Position'
                                onChange={(e) => {
                                    setService({
                                        ...service,
                                        position: e.target.value,
                                    });
                                }}
                            />
                            <div className='group'>
                                <label>Visibility</label>
                                <select
                                    onChange={(e) => {
                                        setService({
                                            ...service,
                                            visibility: e.target.value,
                                        });
                                    }}
                                >
                                    <option disabled></option>
                                    <option value='true'>True</option>
                                    <option value='false'>False</option>
                                </select>
                            </div>
                        </>
                    ) : (
                        <>
                            <input
                                type='text'
                                placeholder='Project Title'
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        title: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type='text'
                                placeholder='Link'
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        link: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type='text'
                                placeholder='Position'
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        position: e.target.value,
                                    });
                                }}
                            />
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
                                accept='.jpeg, .png,.jpg'
                                onChange={(e) => {
                                    let file = e.target.files[0];

                                    console.log(file);

                                    if (file) {
                                        const reader = new FileReader();

                                        reader.onload = (readerEvt) => {
                                            let binaryString =
                                                readerEvt.target.result;

                                            image = btoa(binaryString);
                                        };

                                        reader.readAsBinaryString(file);
                                    }
                                }}
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
                            submit();
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

export default AddWidget;
