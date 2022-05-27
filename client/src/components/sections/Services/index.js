import React from "react";
import Service from "../../helpers/Service";
import Skill from "../../helpers/Skill";
import "./Services.css";

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <h2>SERVICES</h2>
                <div className='holder-box'>
                    <div className='skills-box'>
                        {/* {skills.map((skill) => {
                            return (
                                <Skill
                                    skill={skill.skill}
                                    level={skill.level}
                                    icon={skill.icon}
                                />
                            );
                        })} */}
                    </div>
                    <div className='services-box'>
                        {/* {services.map((service) => {
                            i++;
                            return (
                                <Service
                                    title={service.title}
                                    description={service.description}
                                    icon={
                                        data?.allFile.nodes[i].childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            );
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
