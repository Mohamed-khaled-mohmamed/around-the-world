import CountryCard from './CountryCard'
import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  return (
    <div >
      {/* <CountryCard/> */}
      <CountryList/>
    </div>
  )
}

export default MainContent
