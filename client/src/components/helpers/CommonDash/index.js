import React from "react";
import { useRef, useState } from "react";
import moment from "moment";
import "./CommonDash.css";

import AddWidget from "../AddWidget";
import EditWidget from "../EditWidget";
import DeleteWidget from "../DeleteWidget";
import Row from "../Row";

import searchIcon from "../../../images/search.webp";
import addIcon from "../../../images/add.webp";

const CommonDash = ({ title, skills, services, projects, messages }) => {
    const addRef = useRef(null);
    const editRef = useRef(null);
    const deleteRef = useRef(null);

    const skillsArray = [
        "N°",
        "Icon",
        "Skill",
        "Position",
        "Visibility",
        "Actions",
    ];
    const servicesArray = [
        "N°",
        "Icon",
        "Service",
        "Description",
        "Position",
        "Visibility",
        "Actions",
    ];
    const projectsArray = [
        "N°",
        "Preview",
        "Title",
        "Link",
        "Position",
        "Actions",
    ];
    const messagesArray = [
        "N°",
        "Name",
        "E-mail",
        "Subject",
        "Content",
        "Date",
        "Actions",
    ];

    const [_id, setId] = useState();

    return (
        <div className='common-dash'>
            <AddWidget section={title} reference={addRef} />
            <EditWidget section={title} reference={editRef} />
            <DeleteWidget reference={deleteRef} endPoint={title} _id={_id} />
            <div className='top'>
                <h2>{title}</h2>
                <form>
                    <div className='search'>
                        <img src={searchIcon} alt='Search' />
                        <div className='wrapper'>
                            <input type='text' placeholder='Search...' />
                        </div>
                    </div>
                    {title !== "Messages" ? (
                        <div
                            className='add'
                            onClick={(e) => {
                                addRef.current.style.display = "flex";
                            }}
                        >
                            <img src={addIcon} alt='Add' />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Add
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </form>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        {title === "Skills"
                            ? skillsArray.map((skill, index) => {
                                  return (
                                      <th
                                          key={index}
                                          style={{
                                              width: `calc(100% / ${skillsArray.length})`,
                                          }}
                                      >
                                          {skill}
                                      </th>
                                  );
                              })
                            : title === "Services"
                            ? servicesArray.map((service, index) => {
                                  return (
                                      <th
                                          key={index}
                                          style={{
                                              width: `calc(100% / ${servicesArray.length})`,
                                          }}
                                      >
                                          {service}
                                      </th>
                                  );
                              })
                            : title === "Projects"
                            ? projectsArray.map((project, index) => {
                                  return (
                                      <th
                                          key={index}
                                          style={{
                                              width: `calc(100% / ${projectsArray.length})`,
                                          }}
                                      >
                                          {project}
                                      </th>
                                  );
                              })
                            : messagesArray.map((message, index) => {
                                  return (
                                      <th
                                          key={index}
                                          style={{
                                              width: `calc(100% / ${messagesArray.length})`,
                                          }}
                                      >
                                          {message}
                                      </th>
                                  );
                              })}
                    </tr>
                </thead>
                <tbody>
                    {title === "Skills" ? (
                        skills.length === 0 ? (
                            <tr style={{ backgroundColor: "#fff" }}>
                                <td
                                    className='empty'
                                    colSpan='6'
                                    style={{ display: "revert" }}
                                >
                                    No skills.
                                </td>
                            </tr>
                        ) : (
                            skills.map((skill, index) => {
                                return (
                                    <Row
                                        key={index}
                                        editable={true}
                                        type='skill'
                                        _id={skill._id}
                                        data={[
                                            index + 1,
                                            skill.icon,
                                            skill.skill,
                                            skill.position,
                                            skill.visibility,
                                        ]}
                                        editRef={editRef}
                                        deleteRef={deleteRef}
                                    />
                                );
                            })
                        )
                    ) : title === "Services" ? (
                        services.length === 0 ? (
                            <tr style={{ backgroundColor: "#fff" }}>
                                <td
                                    className='empty'
                                    colSpan='7'
                                    style={{ display: "revert" }}
                                >
                                    No services.
                                </td>
                            </tr>
                        ) : (
                            services.map((service, index) => {
                                return (
                                    <Row
                                        key={index}
                                        editable={true}
                                        type='service'
                                        _id={service._id}
                                        data={[
                                            index + 1,
                                            service.icon,
                                            service.service,
                                            service.description,
                                            service.position,
                                            service.visibility,
                                        ]}
                                        editRef={editRef}
                                        deleteRef={deleteRef}
                                    />
                                );
                            })
                        )
                    ) : title === "Projects" ? (
                        projects.length === 0 ? (
                            <tr style={{ backgroundColor: "#fff" }}>
                                <td
                                    className='empty'
                                    colSpan='6'
                                    style={{ display: "revert" }}
                                >
                                    No projects.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project, index) => {
                                return (
                                    <Row
                                        key={index}
                                        editable={true}
                                        type='project'
                                        _id={project._id}
                                        data={[
                                            index + 1,
                                            project.preview,
                                            project.title,
                                            project.link,
                                            project.position,
                                        ]}
                                        editRef={editRef}
                                        deleteRef={deleteRef}
                                    />
                                );
                            })
                        )
                    ) : messages.length === 0 ? (
                        <tr style={{ backgroundColor: "#fff" }}>
                            <td
                                className='empty'
                                colSpan='7'
                                style={{ display: "revert" }}
                            >
                                No messages.
                            </td>
                        </tr>
                    ) : (
                        messages.map((message, index) => {
                            return (
                                <Row
                                    key={index}
                                    editable={false}
                                    type='message'
                                    _id={message._id}
                                    data={[
                                        index + 1,
                                        message.sender,
                                        message.email,
                                        message.subject,
                                        message.content,
                                        moment(message.createdAt).format(
                                            "MM - DD - YYYY"
                                        ),
                                    ]}
                                    editRef={editRef}
                                    deleteRef={deleteRef}
                                />
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CommonDash;
