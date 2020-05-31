import React from "react";

const CountryInfo = (props) => {
  return (
    <div className='country'>
      <img className="flag" src={props.info.flag} alt="flag" />
      <div>
        <h2 className='country-name'>{props.info.name}</h2>
        <ul>
          <li>Population: {props.info.population}</li>
          <li>Region: {props.info.region}</li>
          <li>Capital: {props.info.capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo
