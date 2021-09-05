import * as React from "react";
import {
  Telephone,
  Facebook,
  Twitter,
  Linkedin,
  Google
} from "react-bootstrap-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className={"header"}>
      <div className={"navbar"}>
        <div className={"navbarContent"}>
          <div className={"navbarItems"}>
            <h1 className={"navbarItem"}></h1>
          </div>
          <div className={"navbarItems"}>
            <p className={"navbarItem"}>Address</p>
          </div>
        </div>
        <div className={"navbarContent"}>
          <div className="navbarItems">
            <a className={"navbarItem"}> Vikas@edujet.com</a>
          </div>
          <div className={"navbarItems"}>
            <a className={"navbarItem"}>
              <Facebook />
            </a>
            <a className={"navbarItem"}>
              <Twitter />
            </a>
            <a className={"navbarItem"}>
              <Linkedin />
            </a>
            <a className={"navbarItem"}>
              <Google />
            </a>
          </div>
          <div className="navbarItems">
            <a className={"navbarItem phoneno"}>
              <Telephone /> <span>1234567890</span>
            </a>
          </div>
        </div>
      </div>
      <div className={"navbar"}>
        <div className={"navbarContent"}>
          <div className={"navbarItems"}>
            <h1 className={"navbarItem"}>Logo</h1>
          </div>
          <div className={"navbarItems"}>
            <p className={"navbarItem"}>Visa & Immigration Consultants</p>
          </div>
        </div>
        <div className={"navbarContent "}>
          <div className={"navbarItems"}>
            <a className={"navbarItem"}>Home</a>
            <a className={"navbarItem"}>Aboutus</a>
            <a className={"navbarItem"}>Contact Us</a>
            <a className={"navbarItem"}>Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
