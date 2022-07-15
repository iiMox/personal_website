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
        position: 0,
        visibility: "",
    });

    const [service, setService] = useState({
        service: "",
        description: "",
        position: 0,
        visibility: "",
    });

    const [project, setProject] = useState({
        title: "",
        position: 0,
        link: "",
    });

    const [image, setImage] = useState();

    const submit = async () => {
        try {
            let imageUrl = "";

            if (image) {
                const formData = new FormData();
                formData.append("image", image);

                const imageRes = await axios.post("/image", formData);

                /* imageUrl = imageRes.data; */
                console.log(imageRes.data);
            }
            let res;
            if (
                section.slice(0, section.length - 1).toLowerCase() === "skill"
            ) {
                res = await axios.post(
                    "/skill",
                    { ...skill, icon: imageUrl },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setSkill({ skill: "", position: "", visibility: "" });
            } else if (
                section.slice(0, section.length - 1).toLowerCase() === "service"
            ) {
                res = await axios.post(
                    "/service",
                    { ...service, icon: imageUrl },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setService({
                    service: "",
                    description: "",
                    position: "",
                    visibility: "",
                });
            } else {
                res = await axios.post(
                    "/project",
                    { ...project, preview: imageUrl },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                setProject({ title: "", position: "", link: "" });
            }
            setImage(null);
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
                                value={skill.skill}
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
                                value={skill.position}
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
                                    value={skill.visibility}
                                    onChange={(e) => {
                                        setSkill({
                                            ...skill,
                                            visibility: e.target.value,
                                        });
                                    }}
                                >
                                    <option value='' disabled></option>
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
                                value={service.service}
                                onChange={(e) => {
                                    setService({
                                        ...service,
                                        service: e.target.value,
                                    });
                                }}
                            />
                            <textarea
                                placeholder='Description'
                                value={service.description}
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
                                value={service.position}
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
                                    value={service.visibility}
                                    onChange={(e) => {
                                        setService({
                                            ...service,
                                            visibility: e.target.value,
                                        });
                                    }}
                                >
                                    <option disabled value=''></option>
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
                                value={project.title}
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
                                value={project.link}
                                onChange={(e) => {
                                    setProject({
                                        ...project,
                                        link: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type='text'
                                value={project.position}
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
                                    setImage(e.target.files[0]);
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
