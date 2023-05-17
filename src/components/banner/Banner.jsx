import React from 'react';
import './banner.css';
import Me from '../../assets/Profile.png';
import Button from './Button';
const Banner = () => {
  return (
    <section className="banner py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row gy-3 gy-sm-0 align-items-center justify-content-center  mt-3 mt-lg-5    ">
          <div className="col-12   col-sm-6 col-md-5 order-2 order-sm-1">
            <div className="b_details  ">
              <h4>Hello</h4>
              <h1>I Am Awal</h1>
              <h4>Frontend Web Devloper</h4>
              <Button />
            </div>
          </div>
          <div className="col-12 order-1 order-sm-2 col-sm-6 col-md-4 text-center  ">
            <div className="b_img">
              <div className="div"></div>
              <img src={Me} className="img-fluid" alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
