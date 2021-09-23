import * as React from "react";

import { Telephone } from "react-bootstrap-icons";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className={"contactUs"}>
      <div className={"contactUsTitle"}>
        <h1>Contact Us</h1>
      </div>
      <div className={"contactDetailsBlock"}>
        <div className={"contactUsInfo"}>
          <div className={"contactText"}>
            <h2>Our Location</h2>
            <p>Hyderabad, Telangana</p>

            <h2>Quick contact</h2>
            <p>vikas@edujet.com</p>
          </div>
          <div className={"contactText phoneText"}>
            <p>
              We will get back to you within 24 hours, or call us everyday,
              09:00 AM - 12:00 PM
            </p>
            <div>
              <Telephone />
              <p>1234567890</p>
            </div>
          </div>
        </div>
        <div className={"contactFormBlock"}>
          <h2>
            Have any question? <span>Feel free to contact us</span>
          </h2>
          {/* <h3>Feel free to contact us</h3> */}
          <form className={"contactForm"}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email Address" />
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button type="submit">Submit Request!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
