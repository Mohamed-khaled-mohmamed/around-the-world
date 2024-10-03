// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).


import { useEffect } from 'react'

function CountryCard() {
//   useEffect(()=>{
//     const  counteris =  
//  } , []) 

useEffect(() => {
 fetch('https://api.counterapi.dev/v1/test/test/up').then(res=>{
  console.log(res.json)
 })
}, [])

  return (
    <div>CountryCard</div>
  )
}

export default CountryCard
