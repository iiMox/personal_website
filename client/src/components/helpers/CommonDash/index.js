import React from "react";
import { useRef } from "react";
import "./CommonDash.css";

import AddWidget from "../AddWidget";
import EditWidget from "../EditWidget";
import DeleteWidget from "../DeleteWidget";
import Row from "../Row";

import searchIcon from "../../../images/search.webp";
import addIcon from "../../../images/add.webp";

const CommonDash = ({ title, skills }) => {
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

    return (
        <div className='common-dash'>
            <AddWidget section={title} reference={addRef} />
            <EditWidget section={title} reference={editRef} />
            <DeleteWidget reference={deleteRef} />
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
                            ? skillsArray.map((skill) => {
                                  return (
                                      <th
                                          style={{
                                              width: `calc(100% / ${skillsArray.length})`,
                                          }}
                                      >
                                          {skill}
                                      </th>
                                  );
                              })
                            : title === "Services"
                            ? servicesArray.map((service) => {
                                  return (
                                      <th
                                          style={{
                                              width: `calc(100% / ${servicesArray.length})`,
                                          }}
                                      >
                                          {service}
                                      </th>
                                  );
                              })
                            : title === "Projects"
                            ? projectsArray.map((project) => {
                                  return (
                                      <th
                                          style={{
                                              width: `calc(100% / ${projectsArray.length})`,
                                          }}
                                      >
                                          {project}
                                      </th>
                                  );
                              })
                            : messagesArray.map((message) => {
                                  return (
                                      <th
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
                    {title === "Skills"
                        ? skills.map((skill, index) => {
                              return (
                                  <Row
                                      key={index}
                                      editable={true}
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
                        : ""}

                    {/* <Row
                        editable={title === "Messages" ? false : true}
                        data={["01", "GG", "HTML", "01", "True"]}
                        editRef={editRef}
                        deleteRef={deleteRef}
                    />
                    <Row
                        editable={title === "Messages" ? false : true}
                        data={["01", "GG", "HTML", "01", "True"]}
                        editRef={editRef}
                        deleteRef={deleteRef}
                    /> */}
                </tbody>
            </table>
        </div>
    );
};

export default CommonDash;
