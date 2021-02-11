import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";

const CountriesContainer = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [countriesToRender, setCountriesToRender] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setAllCountries(response.data);
        setCountriesToRender(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <input placeholder="Search for a country..." />
      </div>
      <div>
        {!allCountries ? (
          <p>Loading</p>
        ) : (
          <Countries countries={allCountries} />
        )}
      </div>
    </div>
  );
};

export default CountriesContainer;
