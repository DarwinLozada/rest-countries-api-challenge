import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CountryPage from "./pages/DetailsPage";
import axios from "axios";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import TransitionPage from "./components/transitions/TransitionComponent";
import "./tailwind.css";
import "./app.css";

export const allCountriesDataContext = createContext();

const App = () => {
  const [allCountries, setAllCountries] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <allCountriesDataContext.Provider value={allCountries}>
        <TransitionPage>
          <div className="global-container bg-veryLightGrey dark:bg-darkBlue">
            <div className="bg-veryLightGrey dark:bg-darkBlue">
              <Switch>
                <Route exact path="/">
                  <Home allCountries={allCountries} />
                </Route>
                {allCountries &&
                  allCountries.map((country) => (
                    <Route
                      path={`/${country.alpha3Code}`}
                      key={country.alpha3Code}
                    >
                      <CountryPage
                        allCountriesData={allCountries}
                        countryName={country.name}
                      />
                    </Route>
                  ))}
                {allCountries && (
                  <Route path="*">
                    <NotFoundPage />
                  </Route>
                )}
              </Switch>
            </div>
          </div>
        </TransitionPage>
      </allCountriesDataContext.Provider>
    </Router>
  );
};

export default App;
