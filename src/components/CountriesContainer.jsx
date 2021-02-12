import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";

const CountriesContainer = () => {
  const allCountries = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [countriesToRender, setCountriesToRender] = useState(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (allCountries.current) {
      const filteredCountries = allCountries.current.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCountriesToRender(filteredCountries);
    }
  }, [inputValue]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        allCountries.current = response.data;
        setCountriesToRender(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div bgColor={"hsl(0, 0%, 98%)"} height={"100vh"}>
      <div>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      <div>
        {!allCountries.current ? (
          <p>Loading</p>
        ) : (
          <Countries countries={countriesToRender} />
        )}
      </div>
    </div>
  );
};

export default CountriesContainer;
