// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard([]) {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>CountryCard</div>;
}

export default CountryCard;
