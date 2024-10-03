import React from 'react'

function CountryList() {

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>CountryList</div>
  )
}

export default CountryList

