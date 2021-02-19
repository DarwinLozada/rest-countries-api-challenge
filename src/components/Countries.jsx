import React from "react";
import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
