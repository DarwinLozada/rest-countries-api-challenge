import React from "react";
import Header from "./components/Header";
import CountriesContainer from "./components/CountriesContainer";
import { ThemeProvider } from "./ThemeContext";
import "./tailwind.output.css";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <CountriesContainer />
      </ThemeProvider>
    </div>
  );
};

export default App;
