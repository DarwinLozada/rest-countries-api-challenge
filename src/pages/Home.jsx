import React, { lazy, Suspense } from "react";
import Header from "../components/Header";

const CountriesContainer = lazy(() => import("../components/CountriesContainer"));

const LoadingSpinner = ({ size }) => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className={`animate-spin rounded-full border-t-4 ${size}`} />
    </div>
  );
};

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
