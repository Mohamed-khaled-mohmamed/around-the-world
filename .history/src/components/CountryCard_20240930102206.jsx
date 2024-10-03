// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard({ country }) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  return (
    <div className='w-64 h- flex flex-col items-center justify-center'>
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

export default CountryCard;
