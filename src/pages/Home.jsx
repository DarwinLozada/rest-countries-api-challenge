import React, { lazy, Suspense } from "react";
import LoadingSpinner from "../components/feedbackComponents/LoadingSpinner";
import Header from "../components/Header";

const CountriesContainer = lazy(() =>
  import("../components/CountriesContainer")
);

const Home = ({ allCountries }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner size="h-20 w-20" />}>
        <CountriesContainer allCountries={allCountries} />
      </Suspense>
    </>
  );
};

export default Home;
