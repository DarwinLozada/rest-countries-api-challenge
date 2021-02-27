import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryPage from "./pages/DetailsPage";
import axios from "axios";
import Home from "./pages/Home";
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
        <div className="global-container">
          <div className="dark:text-white transition duration-500">
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
              <Route path="*">
                <div>
                  <h1>This route does not match with anything</h1>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </allCountriesDataContext.Provider>
    </Router>
  );
};

export default App;
