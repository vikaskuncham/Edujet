import * as React from "react";

import { visaServices } from "./servicesConfig";

import * as Icons from "react-bootstrap-icons";

import "./ServicesHomePage.scss";

const ServicesHomePage = () => {
  return (
    <div className={"servicesHomePage"}>
      <h2>What we do</h2>
      <div className={"visaServices"}>
        {visaServices.map(service => {
          const { [service.icon]: Icon } = Icons;
          console.log(Icon);

          return (
            <div className={"serviceBlock"}>
              <Icon />
              {/* <{service.icon} /> */}
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesHomePage;
