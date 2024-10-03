import { useState } from "react";
import FilterContainer from "./components/FilterContainer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { createContext } from "react";
import CountryList from "./components/CountryList";

const CountriesControl = createContext();

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesControl.Provider value={{ countries, setCountries }}>
      <CountryList setCountries={setCountries} />
      <div className="m-auto flex min-h-screen flex-col items-center bg-mainContentLight text-textLight dark:bg-mainContentDark dark:text-textDark">
        <Navbar />
        <div className="flex flex-col gap-20 py-12">
          <FilterContainer setCountries={setCountries} countries={countries} />
          <div className="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </CountriesControl.Provider>
  );
}

export default App;
export { CountriesControl };
