import React, { useState } from 'react';
import './project.css';
import { proData } from '../../Data/Pojectdata';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loding';
const Project = () => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  return (
    <section className="project py-3 py-md-4 py-lg-5 mt-2 mt-md-3 mt-lg-5 position-relative">
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="container ">
        <div className="p_cont text-center">
          <h6>My recent work</h6>
          <h1>Projects</h1>
        </div>
        <div className="  row mx-auto  align-items-center justify-content-center   mt-2 mt-md-3 mt-lg-4 gy-3 gy-md-4 gy-lg-5">
          {proData.map((data) => {
            const id = uuidv4();
            const { img, title, link } = data;
            return (
              <div key={id} className="col-6 col-sm-6  col-md-4 col-lg-3   ">
                <div className="single border w-100">
                  <img src={img} alt="img" />

                  <div className="img  text-center pb-2 pb-md-3  ">
                    <p className=" p-0 mb-1 ">{title}</p>
                    <Link
                      onClick={handleLoading}
                      to={link}
                      className=" p_btn text-decoration-none text-center mx-auto  "
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Loading loading={loading} setLoading={setLoading} />
    </section>
  );
};

export default Project;
