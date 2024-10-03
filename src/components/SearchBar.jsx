import { useEffect, useRef, useState } from "react";

function SearchBar({ setCountries, selectedOption }) {
  const countries = JSON.parse(localStorage.getItem("countries"));

  const inputRef = useRef();


  useEffect(() => {
    if (selectedOption?.value) {
      let regionCountries = countries?.filter(
        (country) =>
           selectedOption.value.includes(country.region) &&
          country.name.common
            .toLowerCase()
            .startsWith(inputRef?.current?.value.toLowerCase()),
      );

      setCountries(regionCountries);
    }
  }, [selectedOption]);


  function handleChange(valueInput) {
    const searchTerm = valueInput.toLowerCase();
    

    

    if (searchTerm === "" && !selectedOption?.value) {
      setCountries(countries);
    } else if (searchTerm === "" && selectedOption?.value) {
      let regionCountries = countries.filter(
        (country) => selectedOption.value.includes(country.region)
      );
      setCountries(regionCountries);
    } else {
      let regionCountries = countries.filter(
        (country) =>
          selectedOption.value.includes(country.region) &&
          country.name.common
            .toLowerCase()
            .startsWith(inputRef?.current?.value.toLowerCase()),
      );
      setCountries(regionCountries);
    }
  }
  return (
    <form className="w-full max-w-[480px] rounded-full shadow-md">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for a country…"
          required
          ref={inputRef}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </form>
  );
}

export default SearchBar;
