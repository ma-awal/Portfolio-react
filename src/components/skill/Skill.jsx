import React from 'react';
import './skill.css';

import { v4 as uuidv4 } from 'uuid';
import { skillData } from '../../Data/Skildata';
const Skill = () => {
  return (
    <section className="skill py-3 py-md-4 py-lg-5 mt-3 mt-md-4 mt-lg-5   ">
      <div className="container">
        <div className="e_cont text-center">
          <h6>What skill i have</h6>
          <h1>My Skill</h1>
        </div>
        <div className="row   mx-auto align-items-center justify-content-center text-center mt-2 mt-md-3 ">
          {skillData.map((data) => {
            const id = uuidv4();
            const { img, name, skill } = data;
            return (
              <div
                key={id}
                className="col-6 col-md-4 col-lg-3   gy-3 gy-md-4   text-center "
              >
                <div className="box text-center ">
                  <img src={img} className="img-fluid" alt="img" />
                  <h6>{name}</h6>
                  <p>{skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
