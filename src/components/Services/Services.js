import * as React from "react";
import * as Icons from "react-bootstrap-icons";
import { ArrowLeftRight } from "react-bootstrap-icons";

import PageTitle from "../PageTitle/PageTitle";

import { visaServices } from "../../config/servicesConfig";

import "./Services.scss";

const Services = () => {
  const [openModal, setOpenModal] = React.useState({});
  const handleButtonClick = id => {
    setOpenModal({ [id]: true });
  };

  const descriptionBlock = () => {
    return <div>Hello</div>;
  };

  return (
    <div className={"services"} id="services">
      <PageTitle pageTitle={"Services"} />
      <div className={"servicesBlock"}>
        <div className={"header"}>
          <h2>
            Visa Immigration <span>Consultation Services</span>
          </h2>
        </div>

        <div className={"servicesDescription"}>
          {visaServices.map(service => {
            const { [service.icon]: Icon } = Icons;
            return !openModal[service.id] ? (
              <div className={"service"}>
                {/* <Icon /> */}
                <img src={service.image} alt={service.name} />

                <div className={"details"}>
                  <h4>{service.name}</h4>

                  <button onClick={() => setOpenModal({ [service.id]: true })}>
                    <span>Know more</span> <ArrowLeftRight />
                  </button>
                </div>
              </div>
            ) : (
              <div className={"service"}>
                <h4>{service.name}</h4>
                <p className={"description"}>{service.description}</p>
                <button
                  className={"flipBackButton"}
                  onClick={() => setOpenModal({ [service.id]: false })}
                >
                  <ArrowLeftRight /> <span>Back</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
