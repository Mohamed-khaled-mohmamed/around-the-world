// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard({ country }) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  return (
    <div className='w-[264px] h-[326px] m-auto flex flex-col items-center justify-center bg-cardLight dark:bg-cardDark rounded-xl shadow-md'>
      <div className='w-full h-1/2'>
        <img src={country.flags.png} alt={country.name.common} className='w-full h-full object-cover rounded-t-xl' />
      </div>
      <div className='w-full h-1/2'>

      </div>

    </div>


  );
}

export default CountryCard;
