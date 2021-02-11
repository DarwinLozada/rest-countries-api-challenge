import React from "react";
import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((countryData) => {
        return (
          <CountryCard
            countryData={{
              flag: countryData.flag,
              population: countryData.population,
              region: countryData.region,
              capital: countryData.capital,
            }}
          />
        );
      })}
    </div>
  );
};

export default Countries;
