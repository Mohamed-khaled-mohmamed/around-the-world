import { useEffect } from 'react';

function CountryList({setCountries}) {
const counterisStoare
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

