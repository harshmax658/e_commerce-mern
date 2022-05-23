import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../formInput/FormInput";
import "./contactForm.scss";

import { ImLocation } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const ContactForm = ({ contactAdmin, name, email }) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const { subject, message } = formData;
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const validation = () => {
    if (subject.length > 3 && message.length > 3) {
      return false;
    }
    return true;
  };
  const resetVal = () => {
    setFormData({
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      label="Name"
                      //   className="form-control"
                      value={name}
                      disabled={true}
                    />
                    {/* <label for="name" className="">
                      Your name
                    </label> */}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <FormInput
                      type="text"
                      id="email"
                      name="email"
                      //   className="form-control"
                      label="Your email"
                      value={email}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      label="Subject"
                      //   className="form-control"
                      value={subject}
                      onChange={formHandler}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      value={message}
                      onChange={formHandler}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <CustomButton
                disabled={validation()}
                onClick={() => contactAdmin(formData, resetVal)}
              >
                Send
              </CustomButton>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <ImLocation className="icons-Side" />
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li>
                <IoCallSharp className="icons-Side" />
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <SiGmail className="icons-Side" />
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
