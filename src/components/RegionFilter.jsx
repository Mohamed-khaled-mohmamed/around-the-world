// قائمة منسدلة لاختيار القارة أو المنطقة.
import React, { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  {
    value: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    label: "All Region",
  },
  { value: ["Africa"], label: "Africa" },
  { value: ["Americas"], label: "Americas" },
  { value: ["Asia"], label: "Asia" },
  { value: ["Europe"], label: "Europe" },
  { value: ["Oceania"], label: "Oceania" },
];

const RegionFilter = ({ setSelectedOption, selectedOption, setCountries }) => {
  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  const handleChange = (option) => {
    // const countries = JSON.parse(localStorage.getItem("countries"));
    setSelectedOption(option);
  };
  return (
    <Select
      options={options}
      placeholder="Filter by Region"
      value={selectedOption}
      defaultInputValue={options[0].label}
      onChange={handleChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          color: "#ffffff", // Adjust text color for dark mode
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
      }}
      classNames={{
        input: () => " dark:!text-gray-200",
        control: () =>
          "!cursor-pointer bg-mainContentLight dark:bg-gray-700 text-textDark dark:text-textLight border-none rounded-md shadow-sm transition-colors duration-300",
        menu: () =>
          "cursor-pointer bg-mainContentLight dark:bg-mainContentDark text-textLight dark:text-textDark rounded-md mt-1 transition-colors duration-300",
        option: (state) =>
          `px-4 py-2 cursor-pointer transition-colors duration-300 ${
            state.isSelected
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`,
        singleValue: () => "cursor-pointer text-textLight dark:text-textDark",
      }}
    />
  );
};

export default RegionFilter;
