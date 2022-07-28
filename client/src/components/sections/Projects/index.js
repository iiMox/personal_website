import React from "react";
import Project from "../../helpers/Project";
import "./Projects.css";

const Projects = ({ projects }) => {
    return (
        <div className='gallery' id='gallery'>
            <div className='container'>
                <h2>PROJECTS</h2>
                <div className='projects'>
                    {projects.length !== 0
                        ? projects.map((project) => {
                              return (
                                  <Project
                                      key={project._id}
                                      title={project.title}
                                      link={project.link}
                                      imageURL={project.preview}
                                  />
                              );
                          })
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default Projects;
