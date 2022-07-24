import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCarouselVisibility } from "../../actions/carousel";
import CarouselVisibility from "../../utils/carouselVisibility";

import Service from "../../helpers/Service";
import Skill from "../../helpers/Skill";
import "./Services.css";

const Services = ({ skills, services }) => {
    const carouselRef = useRef();

    const dispatch = useDispatch();

    dispatch(setCarouselVisibility(CarouselVisibility(carouselRef, "0px")));

    useEffect(() => {}, []);

    return (
        <div className='services' id='services'>
            <div className='container'>
                <h2>SERVICES</h2>
                <div className='holder-box'>
                    <div className='skills-box'>
                        <div className='carousel' ref={carouselRef}>
                            {skills.length !== 0
                                ? skills.map((skill, index) => {
                                      return (
                                          <Skill
                                              order={index}
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
