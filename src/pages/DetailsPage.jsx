import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { BackArrowIcon } from "../components/iconsComponents/IconComponents";
import Image from "../components/feedbackComponents/Image";
import { allCountriesDataContext } from "../App";
import TransitionPage from "../components/transitions/TransitionComponent";

const DetailsPage = ({ allCountriesData, countryName }) => {
  const dataFromCountriesContext = useContext(allCountriesDataContext).find(
    (country) => country.name === countryName
  );

  const [countryData, setCountryData] = useState(dataFromCountriesContext);

  useEffect(() => {
    if (!countryData) {
      console.log("hola");
      axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then((response) => {
          setCountryData(response.data[0]);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  if (!countryData) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-veryLightGrey dark:bg-veryDarkBlueBg" />
      </>
    );
  }

  return (
    <div className="transition-colors duration-300 flex-col min-h-screen bg-veryLightGrey text-black dark:bg-veryDarkBlueBg dark:text-white">
      <Header />
      <TransitionPage>
        <div className="flex flex-col mx-8 lg:mx-16">
          <div className="flex mt-10 mb-14">
            <Link to={"/"}>
              <button className="flex flex-row items-center justify-center px-10 shadow-md py-2 transition duration-300 rounded focus:outline-none focus:ring-2 text-black dark:text-white bg-white hover:bg-gray-200 dark:bg-darkBlue dark:hover:bg-gray-600">
                <div>
                  <BackArrowIcon width="1rem" />
                </div>
                <p className="ml-2">Back</p>
              </button>
            </Link>
          </div>
          <main className="flex flex-col items-center lg:flex-row lg:gap-20 mb-32">
            <div className="flex justify-center h-auto items-center lg:w-1/2">
              <div className="flex w-full max-w-xl h-64 lg:max-w-screen-sm lg:min-w-min lg:h-96">
                <Image
                  src={countryData.flag}
                  alt={`${countryData.name} flag`}
                  placeholderWidth={"w-80 sm:w-96 lg:w-full"}
                  placeholderHeight={"h-32 md:h-1/2"}
                />
              </div>
            </div>

            <div className="flex-col">
              <div>
                <h2 className="text-2xl font-bold mt-7 mb-4">
                  {countryData.name}
                </h2>
              </div>
              <ul className="flex flex-col md:flex-row md:gap-20 items-baseline">
                <div className="flex flex-col gap-2 text-sm">
                  <li className="font-semibold">
                    Native Name:{" "}
                    <span className="font-normal">{`${countryData.nativeName}`}</span>
                  </li>
                  <li className="font-semibold">
                    Population:{" "}
                    <span className="font-normal">{`${countryData.population}`}</span>
                  </li>
                  <li className="font-semibold">
                    Region:{" "}
                    <span className="font-normal">{`${countryData.region}`}</span>
                  </li>
                  <li className="font-semibold">
                    Sub Region:{" "}
                    <span className="font-normal">{`${countryData.subregion}`}</span>
                  </li>
                  <li className="font-semibold">
                    Capital:{" "}
                    <span className="font-normal">{`${countryData.capital}`}</span>
                  </li>
                </div>
                <div className="flex flex-col text-sm mt-8 gap-2">
                  <li className="font-semibold">
                    Top Level Domain:{" "}
                    <span className="font-normal">{`${countryData.topLevelDomain[0]}`}</span>
                  </li>
                  <li className="font-semibold">
                    Currencies:{" "}
                    {countryData.currencies.map((currency) => {
                      return (
                        <span
                          className="font-normal"
                          key={currency.name}
                        >{`${currency.name} `}</span>
                      );
                    })}
                  </li>
                  <li className="font-semibold">
                    Languages:{" "}
                    {countryData.languages.map((language) => {
                      return (
                        <span
                          className="font-normal"
                          key={language.name}
                        >{`${language.name} `}</span>
                      );
                    })}
                  </li>
                </div>
              </ul>
              <div className="mt-8">
                <p className="font-semibold mb-8">Border Countries: </p>
                <div className="flex flex-row gap-4 flex-wrap">
                  {countryData.borders.length > 0 ? (
                    countryData.borders.map((border) => {
                      const borderCountry = allCountriesData.find(
                        (country) => country.alpha3Code === border
                      );
                      return borderCountry ? (
                        <Link
                          to={`/${borderCountry.alpha3Code}`}
                          key={`${countryData.name} to ${borderCountry.name}`}
                        >
                          <button
                            className="px-8 py-1 rounded transition-colors shadow focus:outline-none focus:ring-2 text-black bg-white dark:bg-darkBlue dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                            key={`from ${countryData.name} to ${borderCountry}`}
                          >
                            <p> {borderCountry.name}</p>
                          </button>
                        </Link>
                      ) : null;
                    })
                  ) : (
                    <p>This country does not have borders</p>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </TransitionPage>
    </div>
  );
};

export default DetailsPage;
