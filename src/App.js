import React from "react";
import Header from "./components/Header";
import CountriesContainer from "./components/CountriesContainer";
import { ThemeProvider } from "./ThemeContext";
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="global-container">
      <div>
        <Header />
        <CountriesContainer />
      </div>
    </div>
  );
};

export default App;
