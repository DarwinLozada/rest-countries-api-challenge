import React from "react";
import CountryCard from "./CountryCard";
import TransitionComponent from "./transitions/TransitionComponent";

const RenderCountryCards = ({ countries }) => {
  return countries.map((countryData) => {
    return (
      <TransitionComponent>
        <CountryCard key={countryData.name} countryData={countryData} />{" "}
      </TransitionComponent>
    );
  });
};

export default RenderCountryCards;
