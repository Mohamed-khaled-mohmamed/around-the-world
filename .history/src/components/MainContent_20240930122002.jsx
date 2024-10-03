import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  const ArabCountries = ['Palestine' , 'Egypt'  , 'Morocco' , 'Kingdom of SaudiArabia' , 'Republic of the Sudan' , 'Algeria' , 'Libya' , 'Jordan' ].map(country => country.trim());
  return (
    <div  className='bg-mainContentLight  dark:bg-mainContentDark grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 px-20 py-32'>
      <CountryList setCountries={setCountries}/>
      {/* <CountryCard countries={countries}/> */}
      {countries.map((country) => (
      //  ArabCountries.includes(country.name.common.trim())   ? <CountryCard key={country.name.common} country={country} /> : ""
 <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
    
  );
}

export default MainContent
