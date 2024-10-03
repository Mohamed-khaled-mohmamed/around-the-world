import { useEffect } from 'react';

function CountryList({setCountries}) {
const counterisStoare = JSON.localStorage.getItem('countries') || [];
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
}

export default CountryList

