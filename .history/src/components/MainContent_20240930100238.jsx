import CountryList from './CountryList'
import { useState } from 'react';

function MainContent() {
  const [countries, setCountries] = useState([]);
  return (
    <div >
      {/* <CountryCard/> */}
      <CountryList setCountries={setCountries}/>
    </div>
  )
}

export default MainContent
