import React, { lazy, Suspense } from "react";
import LoadingSpinner from "../components/feedbackComponents/LoadingSpinner";
import Header from "../components/Header";
import TransitionComponent from "../components/transitions/TransitionComponent";

const CountriesContainer = lazy(() =>
  import("../components/CountriesContainer")
);

const Home = ({ allCountries }) => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <TransitionComponent>
            <div className="h-screen">
              <LoadingSpinner size="h-20 w-20" />{" "}
            </div>
          </TransitionComponent>
        }
      >
        <CountriesContainer allCountries={allCountries} />
      </Suspense>
    </>
  );
};

export default Home;
