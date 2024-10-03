// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).

import { useEffect } from 'react';

function CountryCard() {
  //   useEffect(()=>{
  //     const  counteris =
  //  } , [])

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/test/test/up').then((res) => {
      res.json();
    }).then(da);
  }, []);

  return <div>CountryCard</div>;
}

export default CountryCard;
