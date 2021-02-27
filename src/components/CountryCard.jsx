import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const CountryCard = ({ countryData }) => {
  const location = {
    pathname: `${countryData.alpha3Code}`,
  };

  return (
    <Link to={location}>
      <div className="transform hover:scale-110 hover:shadow-2xl flex flex-col dark:bg-darkBlue rounded overflow-hidden shadow-lg my-6 cursor-pointer transition-all duration-300">
        <Image
          src={countryData.flag}
          alt={`${countryData.name} flag`}
          placeholderWidth="w-full"
          placeholderHeight="h-64"
          imageHeight="h-60"
        />
        <div className="pt-6 pb-10 px-6">
          <p className="text-xl font-bold">{countryData.name}</p>
          <p className="mt-4 text-xs font-semibold">
            Population:
            <span className="font-normal">{` ${countryData.population.toLocaleString()}`}</span>
          </p>
          <p className="mt-1 text-xs font-semibold">
            Region:
            <span className="font-normal">{` ${countryData.region}`}</span>
          </p>
          <p className="mt-1 text-xs font-semibold">
            Capital:{" "}
            <span className="font-normal">{`${countryData.capital}`}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
