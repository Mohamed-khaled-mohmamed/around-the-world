import CountryCard from './CountryCard';
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  return (
    <div >
      <CountryList setCountries={setCountries}/>
      {/* <CountryCard countries={countries}/> */}
      {countries.map((country) => (
        
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default MainContent
