import React from 'react';
import './address.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { CiLocationOn } from 'react-icons/ci';

import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
// import { BsMessenger } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
const Address = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_epxu488',
        'template_sodm9jv',
        form.current,
        'BUunADRxYFA-4Ov88'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="address position-relative py-3 py-md-4 py-lg-5 mt-2 mt-md-3 mt-md-5 ">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="c_cont text-center">
        <h6>Get in touch</h6>
        <h1>Contact us</h1>
      </div>
      <div className="container">
        <div className="row mx-auto py-2 py-md-3 py-lg-4 mt-2 mt-lg-3 align-items-center justify-content-center justify-content-md-between ">
          <div className="col-10 col-sm-6 col-md-5   a_connect ">
            <div className="adress mt-2 mt-md-3">
              <AiOutlineMail />
              <span className="  d-block">developerawal3@gmail.com</span>
              <p>Send your mail any time</p>
            </div>
            <div className="adress mt-2 mt-md-3  ">
              <AiOutlinePhone className=" " />
              <span className="   d-block">01812959878</span>
              <p>Don't forget to knock through mobile</p>
            </div>
            <div className="adress mt-2 mt-md-3">
              <CiLocationOn />
              <span className=" d-block">Sirajganj,Dhaka ,Bangladesh</span>
              <p>The main city of the Bangladesh</p>
            </div>

            {/* <div className="   c_box   ">
              <div className="  box">
                <AiOutlineMail />
                <h6>Email</h6>
                <span className="d-block mt-2">maawal797@gmail.com</span>
                <a href="mailto:maawal797@gmail.com" target="_blank">
                  Send Message
                </a>
              </div>

              <div className="     box">
                <BsMessenger />
                <h6>Messenger</h6>
                <span className="d-block mt-2">maaawal797@gmail.com</span>
                <a
                  href=" https://m.me/profile.php?id=100077524644610"
                  target="_blank"
                >
                  Send Message
                </a>
              </div>

              <div className="   box">
                <BsWhatsapp />
                <h6>Whats app</h6>
                <span className="d-block mt-2">01812959878</span>
                <a href="https://wa.me/8801812959878" target="_blank">
                  Send Message
                </a>
              </div>
            </div> */}
          </div>

          {/* col 2 */}
          <div className=" col-10 col-sm-6 col-md-5">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="input_form mb-2 mb-md-3  ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                  id="name"
                  name="name"
                />
              </div>
              <div className="input_form  mb-2 mb-md-3    ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  id="email"
                  name="email"
                />
              </div>

              <div className="input_form  mb-2 mb-md-3  ">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control    "
                  rows={2}
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-2">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
