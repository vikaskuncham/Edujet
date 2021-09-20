import * as React from "react";
import { countryDetails } from "./countryConfig";
// import '../../public/'

import "./Countries.scss";

const Countries = () => {
  return (
    <div className={"countries"}>
      <div className={"countrySection"}>
        {countryDetails.length !== 0 &&
          countryDetails.map(country => (
            <div className={"country"}>
              <img alt={country.name} src={country.image} />
              <h3>{country.name}</h3>
              <p>{country.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
