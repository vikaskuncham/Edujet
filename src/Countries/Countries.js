import * as React from "react";
import { countryDetails } from "./countryConfig";
// import '../../public/'

import "./Countries.scss";

const Countries = () => {
  const env = process.env;
  console.log(env);

  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <div className={"countries"}>
      <div className={"countrySection"}>
        {countryDetails.length !== 0 &&
          countryDetails.map(country => (
            <div className={"country"}>
              <img src={country.image} />
              <h3>{country.name}</h3>
              <p>{country.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
