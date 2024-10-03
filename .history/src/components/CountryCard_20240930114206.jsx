// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard({ country }) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  return (
    <div className='w-[264px] h-[326px] m-auto flex flex-col items-center justify-center bg-cardLight dark:bg-cardDark rounded-xl shadow-md'>
      .
      <h2 className='text-lg font-semibold mt-4'>{country.name.common}</h2>
      <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Population: {country.population}</p>
      <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Region: {country.region}</p>
      <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Capital: {country.capital}</p>
    </div>


  );
}

export default CountryCard;
