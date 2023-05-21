import React from 'react';
import './footer.css';
import facebook from '../../assets/facebook.png';
import linkdin from '../../assets/linkedin.png';
import Whatsup from './Whatsup';
const Footer = () => {
  return (
    <footer className="footer  " style={{ zIndex: 100 }}>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <h6>follow me</h6>
          <div className="icon d-flex gap-2 justify-content-center">
            <a
              href="https://www.facebook.com/profile.php?id=100077524644610"
              target="_blank"
              className="text-decoration-none"
            >
              <img src={facebook} className="img-fluid" alt="face" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-awal3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCpGGKQOfTg%2Bh4hNRlmcU6g%3D%3D"
              target="_blank"
              className="text-decoration-none"
            >
              <img src={linkdin} className="img-fluid" alt="link" />
            </a>
          </div>
        </div>
      </div>
      <Whatsup />
    </footer>
  );
};

export default Footer;
