import * as React from "react";
import PageTitle from "../PageTitle/PageTitle";

import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className={"aboutUs"}>
      {/* <PageTitle pageTitle={"About Us"} /> */}
      <div className={"featuresBlock"}>
        <div className={"imageBlock"}>
          <img
            src={
              "https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_1280.jpg"
            }
          />
        </div>
        <div className={"features"}>
          <p className={"subtitle"}>Why to Choose Us</p>
          <div className={"featuresList"}>
            <p>What you can look forward to: </p>
            <ul>
              <li>A variety of passport and visa services.</li>
              <li>Availability of more universities for counselling.</li>
              <li>
                Virtual Fairs and Webinar to understand your opportunities
              </li>
              <li>Wider range of countries to choose from</li>
              <li>Faster application processing for multiple countries.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
