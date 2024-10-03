import { useEffect } from "react";
import { useState } from "react";
// import CountryList from "./CountryList";
// import FilterContainer from "./FilterContainer";
// import CountryDetail from "./countryDetail";
import CountryCard from "./CountryCard";
import CountryNotfound from "./CountryNotfound";
import { useContext } from "react";
import { CountriesControl } from "../App";
import { Outlet, useParams } from "react-router-dom";

function MainContent() {
  const { countries, setCountries } = useContext(CountriesControl);
  const [loading, setLoading] = useState(true);
  const { Country } = useParams();

  useEffect(() => {
    if (countries?.length > 0) {
      setLoading(false);
    }
  }, [countries]);

  const ArabCountries = [
    "Palestine",
    "Egypt",
    "Morocco",
    "Saudi Arabia",
    "Sudan",
    "Algeria",
    "Libya",
    "Jordan",
    "Afghanistan",
    "Iraq",
    "Tunisia",
    "Yemen",
    "Syria",
    "Qatar",
  ];

  return (
    <div className="flex flex-col  py-12">
      {/* <CountryList setCountries={setCountries} /> */}
      {/* <FilterContainer setCountries={setCountries} countries={countries} /> */}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="detail">
            <Outlet />
          </div>
          {/* إذا لم يكن هناك Country، عرض تفاصيل البلدان */}
          {!Country && (
            <div>
              {countries.length > 0 ? (
                <div className="ArabCountries grid w-full grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {countries.map((country) =>
                    ArabCountries.includes(country.name.common.trim()) ? (
                      <CountryCard key={country.name.common} country={country} />
                    ) : null,
                  )}
                  {countries.map((country) =>
                    !ArabCountries.includes(country.name.common.trim()) &&
                    country.name.common !== "Israel" ? (
                      <CountryCard key={country.name.common} country={country} />
                    ) : null,
                  )}
                </div>
              ) : (
                <div className="w-[60vw]">
                  <CountryNotfound />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}


export default MainContent;
