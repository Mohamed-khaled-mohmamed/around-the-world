import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  const ArabCountries = ['Palestine' , 'Egypt'  , 'Morocco' , 'Saudi Arabia' , 'Sudan' , 'Algeria' , 'Libya' , 'Jordan' , ].map(country => country.trim());
  return (
    <div  className='max-w-[1251px] grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20  py-32'>
      <CountryList setCountries={setCountries}/>
      <div className='ArabCountries'>
      {countries.map((country) => (
       ArabCountries.includes(country.name.common.trim())   ? <CountryCard key={country.name.common} country={country} /> : null
      ))}
      </div>
      <div className='forginCountires'>
        
      </div>
    </div>
    
  );
}

export default MainContent
