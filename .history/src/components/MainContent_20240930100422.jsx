import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  return (
    <div >
      <CountryList setCountries={setCountries}/>
      {/* <CountryCard/> */}
    </div>
  )
}

export default MainContent
