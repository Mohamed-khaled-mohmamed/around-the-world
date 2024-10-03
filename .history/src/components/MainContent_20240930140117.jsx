import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  const ArabCountries = ['Palestine' , 'Egypt'  , 'Morocco' , 'Saudi Arabia' , 'Sudan' , 'Algeria' , 'Libya' , 'Jordan' , 'Afghanistan' ,'Iraq' , 'Tunisia' ,'Yemen' , ''].map(country => country.trim());
  return (
    <div  className='max-w-[1251px] flex flex-col  py-32 gap-20'>
      <CountryList setCountries={setCountries}/>
      <div className='ArabCountries grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>
      {countries.map((country) => (
       ArabCountries.includes(country.name.common.trim())   ? <CountryCard key={country.name.common} country={country} /> : null
      ))}
           {countries.map((country) => (
       !ArabCountries.includes(country.name.common.trim()) && (country.name.common !=='Israel')   ? <CountryCard key={country.name.common} country={country} /> : null
      ))}
      </div>
      <div className='forginCountires grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>
 
      </div>
    </div>
    
  );
}

export default MainContent
