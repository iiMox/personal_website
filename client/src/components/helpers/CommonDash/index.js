import React from "react";
import { useRef } from "react";
import "./CommonDash.css";

import AddWidget from "../AddWidget";

import searchIcon from "../../../images/search.webp";
import addIcon from "../../../images/add.webp";
import editIcon from "../../../images/edit.webp";
import deleteIcon from "../../../images/delete.webp";

const CommonDash = ({ title }) => {
    const addRef = useRef(null);

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
        "E-mail",
        "Subject",
        "Message",
        "Date",
        "Actions",
    ];

    return (
        <div className='common-dash'>
            <AddWidget section={title} reference={addRef} />
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
                    <tr>
                        <td>01</td>
                        <td>GG</td>
                        <td>HTML</td>
                        <td>01</td>
                        <td>True</td>
                        <td>
                            <img src={editIcon} />
                            <img src={deleteIcon} />
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>GG</td>
                        <td>CSS</td>
                        <td>02</td>
                        <td>True</td>
                        <td>
                            <img src={editIcon} />
                            <img src={deleteIcon} />
                        </td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>GG</td>
                        <td>JS</td>
                        <td>03</td>
                        <td>True</td>
                        <td>
                            <img src={editIcon} />
                            <img src={deleteIcon} />
                        </td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>GG</td>
                        <td>React</td>
                        <td>04</td>
                        <td>False</td>
                        <td>
                            <img src={editIcon} />
                            <img src={deleteIcon} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CommonDash;
