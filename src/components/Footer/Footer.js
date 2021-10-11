import * as React from "react";
import { Link } from "react-router-dom";
import { Telephone, GeoAlt, Envelope } from "react-bootstrap-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footerSection"}>
        <div>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
        <div>
          <h3>Visa Services</h3>
          <ul>
            <li>Student Visa</li>
            <li>Visitor Visa</li>
            <li>Permanent Residency</li>
            <li>Partner Visa</li>
          </ul>
        </div>
        <div className={"footerContactUs"}>
          <h3>Contact Us</h3>
          <p>Edujet Consulting Services</p>
          <p>Hyderabad, Telangana</p>
          <p>1234567890</p>
        </div>
      </div>
      <div className={"contactInfo"}>
        <div className={"contactDiv"}>
          <div className={"iconBlock"}>
            <Envelope />
          </div>
          <div>
            <a>vikaskuncham@Edujet.com</a>
            <p>Drop us a line</p>
          </div>
        </div>
        <div className={"contactDiv phoneBlock"}>
          <div className={"iconBlock"}>
            <Telephone />
          </div>
          <div>
            <a>123456789</a>
            <p>Call us now!</p>
          </div>
        </div>
        <div className={"contactDiv"}>
          <div className={"iconBlock"}>
            <GeoAlt />
          </div>
          <div>
            <a>Hyderabad, Telangana</a>
            <p>Get Direction</p>
          </div>
        </div>
      </div>
      <div className={"copyrightInfo"}>
        <div className={"menu"}>
          <Link to="/" className={"navbarItem"}>
            Home
          </Link>
          <Link to="/about" className={"navbarItem"}>
            About Us
          </Link>
          <Link to="/services" className={"navbarItem"}>
            Services
          </Link>
          <Link to="/contactUs" className={"navbarItem"}>
            Contact Us
          </Link>
        </div>
        <p>Copyright © 2021 Edujet. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
