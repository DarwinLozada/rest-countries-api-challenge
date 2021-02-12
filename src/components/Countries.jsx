import React from "react";
import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((countryData) => {
        return (
          <CountryCard
            key={countryData.name}
            countryData={{
              flag: countryData.flag,
              name: countryData.name,
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
