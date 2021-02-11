import React from "react";

const CountryCard = ({ countryData }) => {
  return (
    <div>
      <img src={countryData.flag} alt={`${countryData.name} flag`}></img>
      <div>
        <h2>{countryData.name}</h2>
        <p>{`Population: ${countryData.population}`}</p>
        <p>{`Region: ${countryData.region}`}</p>
        <p>{`Capital: ${countryData.capital}`}</p>
      </div>
    </div>
  );
};

export default CountryCard;
