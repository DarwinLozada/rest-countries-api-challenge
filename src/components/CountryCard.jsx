import React from "react";

const CountryCard = ({ countryData }) => {
  return (
    <div>
      <img
        width="100%"
        src={countryData.flag}
        alt={`${countryData.name} flag`}
      ></img>
      <div
        display="flex"
        direction="column"
        padding="20px 10px 40px 20px"
        margin="0 0 0 0"
      >
        <h3 margin="10px 0 0 0">{countryData.name}</h3>
        <p margin="20px 0 0 0" fontSize="15px">
          Population:
          <span>{` ${countryData.population.toLocaleString()}`}</span>
        </p>
        <p margin="6px 0 0 0">
          Region:<span>{` ${countryData.region}`}</span>
        </p>
        <p margin="6px 0 0 0">
          Capital: <span>{`${countryData.capital}`}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
