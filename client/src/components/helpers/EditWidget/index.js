import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../../actions/image";
import { updateSkill } from "../../actions/skill";
import { updateService } from "../../actions/service";
import { updateProject } from "../../actions/project";
import "./EditWidget.css";

import uploadIcon from "../../../images/upload.webp";
import closeIcon from "../../../images/close.webp";
import saveIcon from "../../../images/save.webp";

const EditWidget = ({ section, reference }) => {
    const inputRef = useRef(null);

    const row = useSelector((state) => state.row);

    useEffect(() => {
        setSkill({
            skill: row.skill || "",
            position: row.position || 0,
            visibility: row.visibility,
        });

        setService({
            service: row.service || "",
            description: row.description || "",
            position: row.position || 0,
            visibility: row.visibility,
        });

        setProject({
            title: row.title || "",
            position: row.position || 0,
            link: row.link || "",
        });
    }, [row]);

    const dispatch = useDispatch();

    const [skill, setSkill] = useState({
        skill: row.skill || "",
        position: row.position || 0,
        visibility: row.visibility,
    });

    const [service, setService] = useState({
        service: row.service || "",
        description: row.description || "",
        position: row.position || 0,
        visibility: row.visibility,
    });

    const [project, setProject] = useState({
        title: row.title || "",
        position: row.position || 0,
        link: row.link || "",
    });

    const [image, setImage] = useState(undefined);

    const submit = async () => {
        const origin = { ...row };
        delete origin["type"];
        delete origin["icon" || "preview"];
        delete origin["_id"];

        let imgUrl = "";

        if (image !== undefined) {
            imgUrl = await uploadImage(image);
        }

        if (row.type === "skill") {
            if (
                JSON.stringify(origin) !== JSON.stringify(skill) ||
                image !== undefined
            ) {
                console.log("hi");
                dispatch(
                    updateSkill(row._id, {
                        ...skill,
                        icon: image !== undefined ? imgUrl : row.icon,
                    })
                );
            }
        } else if (row.type === "service") {
            if (
                JSON.stringify(origin) !== JSON.stringify(service) ||
                image !== undefined
            ) {
                dispatch(
                    updateService(row._id, {
                        ...service,
                        icon: image !== undefined ? imgUrl : row.icon,
                    })
                );
            }
        } else if (row.type === "project") {
            if (
                JSON.stringify(origin) !== JSON.stringify(project) ||
                image !== undefined
            ) {
                dispatch(
                    updateProject(row._id, {
                        ...project,
                        preview: image !== undefined ? imgUrl : row.preview,
                    })
                );
            }
        }
        reference.current.style.display = "none";
    };

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
                                placeholder='Position'
                                value={project.position}
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

export default EditWidget;
