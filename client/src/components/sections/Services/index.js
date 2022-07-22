import React from "react";
import { useEffect, useRef } from "react";
import Service from "../../helpers/Service";
import Skill from "../../helpers/Skill";
import "./Services.css";

const Services = ({ skills, services }) => {
    const skillsRef = useRef();

    useEffect(() => {
        const skills = [].slice.call(skillsRef.current.children);
        setInterval(() => {
            /* skills.forEach((skill, index) => {
                skill.style.transform = `translateX(${
                    index === 0 ? (skills.length - 1) * 100 : 0
                }%)`;
                skill.style.opacity = `${index === 0 ? 0 : 1}`;
            }); */
            /* skills.push(skills.shift());
            skillsRef.current.innerHTML = "";
            skills.forEach((skill) => {
                skillsRef.current.appendChild(skill);
            }); */
            /* skills.forEach((skill) => {
                const order = skill.dataset.order;

                if (order > 1) {
                    skill.dataset.order = order - 1;
                    skill.style.transform = `translate(-${(order - 1) * 100}%)`;
                } else {
                    skill.dataset.order = skills.length - 1;
                    skill.style.transform = `translateX(${
                        (skills.length - 1) * 100
                    }%)`;
                }
            }); */
        }, 2000);
    });

    return (
        <div className='services' id='services'>
            <div className='container'>
                <h2>SERVICES</h2>
                <div className='holder-box'>
                    <div className='skills-box'>
                        <div className='carousel' ref={skillsRef}>
                            {skills.length !== 0
                                ? skills.map((skill, index) => {
                                      return (
                                          <Skill
                                              order={index + 1}
                                              maxOrder={skills.length}
                                              key={skill._id}
                                              skill={skill.skill}
                                              icon={skill.icon}
                                          />
                                      );
                                  })
                                : ""}
                        </div>
                    </div>
                    <div className='services-box'>
                        {services.length !== 0
                            ? services.map((service) => {
                                  return (
                                      <Service
                                          key={service._id}
                                          title={service.service}
                                          description={service.description}
                                          icon={service.icon}
                                      />
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
