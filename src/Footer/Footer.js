import * as React from "react";
import { Telephone, GeoAlt, Envelope } from "react-bootstrap-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footerSection"}>
        <div>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur
          </p>
        </div>
        <div>
          <h3>Visa Services</h3>
          <ul>
            <li>Student Visa</li>
            <li>Partner Visa</li>
            <li>Permanent Residency</li>
          </ul>
        </div>
        <div>
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
        <p>Copyright © 2021 Edujet. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
