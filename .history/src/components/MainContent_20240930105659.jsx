import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  return (
    <div  className='bg-mainContentLight dark:bg-mainContentDark grid auto-cols-auto	 '>
      <CountryList setCountries={setCountries}/>
      {/* <CountryCard countries={countries}/> */}
      {countries.map((country) => (
        country.name.common !== 'Israel' && <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default MainContent
