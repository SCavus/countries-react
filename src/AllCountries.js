import React from 'react'
import CountryInfo from './CountryInfo'
import countryData from './CountriesData.json'

const AllCountries = () => {
    return (
        <div className='countries-page'>
        {countryData.map((country)=> {
            return (
                <CountryInfo info={country}/>
            )
        })}
    </div>
)
}

export default AllCountries