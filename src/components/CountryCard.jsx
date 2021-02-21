import React from "react";

const CountryCard = ({ countryData }) => {
  return (
    <div className="transform hover:scale-110 hover:shadow-2xl flex flex-col dark:bg-darkBlue rounded overflow-hidden shadow-lg my-6 cursor-pointer transition-transform duration-500">
      <img
        className="w-full h-full"
        src={countryData.flag}
        alt={`${countryData.name} flag`}
      />
      <div className="pt-6 pb-10 px-6">
        <h3 className="font-bold">{countryData.name}</h3>
        <p className="mt-4 text-xs font-semibold">
          Population:
          <span className="font-normal">{` ${countryData.population.toLocaleString()}`}</span>
        </p>
        <p className="mt-1 text-xs font-semibold">
          Region:<span className="font-normal">{` ${countryData.region}`}</span>
        </p>
        <p className="mt-1 text-xs font-semibold">
          Capital:{" "}
          <span className="font-normal">{`${countryData.capital}`}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
