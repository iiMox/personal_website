import React from "react";
import Project from "../../helpers/Project";
import "./Projects.css";

const Projects = () => {
    return (
        <div className='gallery' id='gallery'>
            <div className='container'>
                <h2>PROJECTS</h2>
                <div className='projects'>
                    {/* {projects.map((project) => {
                        i--;
                        return (
                            <Project
                                title={project.title}
                                link={project.link}
                                imageURL={
                                    data?.allFile.nodes[i].childImageSharp
                                        .gatsbyImageData
                                }
                            />
                        );
                    })} */}
                </div>
            </div>
        </div>
    );
};

export default Projects;
