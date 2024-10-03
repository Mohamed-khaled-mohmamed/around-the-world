import { useEffect } from 'react';

function CountryList({setCountries}) {
const counterisStorage = JSON.parse(localStorage.getItem('countries')) || [];
  useEffect(() => {
    counterisStorage.length === 0 ? fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      }) : setCountries(counterisStorage);
  }, []);
}

export default CountryList

