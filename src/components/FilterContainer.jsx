import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";

function FilterContainer({ setCountries , countries }) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="w-full  flex gap-10 max-sm:flex-col  items-center justify-between ">
      <SearchBar setCountries={setCountries} selectedOption={selectedOption}/>
      <RegionFilter setCountries={setCountries} setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
    </div>
  );
}

export default FilterContainer;
