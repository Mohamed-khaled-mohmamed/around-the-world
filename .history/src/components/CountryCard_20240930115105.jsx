// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard({ country }) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  return (
    <div className='w-[264px] h-[326px] m-auto flex flex-col items-center justify-center bg-cardLight dark:bg-cardDark rounded-xl shadow-md'>
      <div className='w-full h-1/2 text-center p-3'>
        <img src={country.flags.png} alt={country.name.common} className='w-full h-full object-cover rounded-md' />
      </div>
      <div className='w-full h-1/2 p-3 '>
      <h2 className='text-lg font-semibold mt-4'>{country.name.common}</h2>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Population: {country.population}</p>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Region: {country.region}</p>
      <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>Capital: {country.capital}</p>
      </div>

    </div>


  );
}

export default CountryCard;
