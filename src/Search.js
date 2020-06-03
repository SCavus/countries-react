import React, { useState } from "react";
import data from "./CountriesData.json";
import AllCountries from "./AllCountries";

const Search = () => {
  const [country, setCountry] = useState(data);

  const searchCountry = (value) => {
    setCountry(
      data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const searchCapital = (value) => {
    setCountry(
      data.filter((item) =>
        item.capital.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className='display-main-page'>
      <div className="search-bar">
        <div>
          <label htmlFor="country-search">Search Countries</label>
          <input
            type="text"
            id="country-search"
            className="search"
            placeholder="Search"
            onChange={(e) => searchCountry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="capital-search">Search Capitals</label>
          <input
            type="text"
            id="capital-search"
            className="search"
            placeholder="Search"
            onChange={(e) => searchCapital(e.target.value)}
          />
        </div>
      </div> 
      <AllCountries countryData={country} />
    </div>
  );
};

export default Search;
