import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  const ArabCountries = ['Palestine' , 'Egypt'  , 'Morocco' , 'Saudi Arabia' , 'Sudan' , 'Algeria' , 'Libya' , 'Jordan' , ].map(country => country.trim());
  return (
    <div  className='max-w-[1251px] grid  py-32'>
      <CountryList setCountries={setCountries}/>
      <div className='ArabCountries   flex'>
      {countries.map((country) => (
       ArabCountries.includes(country.name.common.trim())   ? <CountryCard key={country.name.common} country={country} /> : null
      ))}
      </div>
      <div className='forginCountires flex'>
      {countries.map((country) => (
       !ArabCountries.includes(country.name.common.trim())   ? <CountryCard key={country.name.common} country={country} /> : null
      ))}
      </div>
    </div>
    
  );
}

export default MainContent
