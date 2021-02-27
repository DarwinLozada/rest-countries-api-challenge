import React from "react";
import CountryCard from "./CountryCard";

const RenderCountryCards = ({ countries }) => {
  return countries.map((countryData) => {
    return <CountryCard key={countryData.name} countryData={countryData} />;
  });
};

export default RenderCountryCards;
