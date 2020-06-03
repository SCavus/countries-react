import React from "react";
import CountryInfo from "./CountryInfo";

const AllCountries = (props) => {
  return (
    <div className="countries-page">
      {props.countryData.map((country, index) => {
        return <CountryInfo key={index} info={country} />;
      })}
    </div>
  );
};

export default AllCountries;
