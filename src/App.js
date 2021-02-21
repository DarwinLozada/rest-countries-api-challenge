import React from "react";
import Header from "./components/Header";
import CountriesContainer from "./components/CountriesContainer";
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="global-container">
      <div className="dark:text-white transition duration-500">
        <Header />
        <CountriesContainer />
      </div>
    </div>
  );
};

export default App;
