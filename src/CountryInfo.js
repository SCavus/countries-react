import React from "react";

const CountryInfo = (props) => {
  return (
    <div className='country'>
      <img className="flag" src={props.info.flag} alt="flag" />
      <div>
        <h2 className='country-name'>{props.info.name}</h2>
        <ul>
          <li><b>Population:</b> {props.info.population}</li>
          <li><b>Region:</b> {props.info.region}</li>
          <li><b>Capital:</b> {props.info.capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo
