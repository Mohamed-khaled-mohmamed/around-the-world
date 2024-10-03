// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard({ country }) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  return (
    <div className='w-[264px] h-[326px] m-auto flex flex-col items-center justify-center bg-cardLight dark:bg-cardDark rounded-xl shadow-md'>
      <img src={country.flags.png} alt={country.name.common} className='w-full h-1/2 object-cover rounded-t-xl' />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

export default CountryCard;
