// حتوي على علم الدولة واسمها والتفاصيل الأخرى (السكان، المنطقة، العاصمة).


import React from 'react'
import { useEffect } from 'react'

function CountryCard() {
//   useEffect(()=>{
//     const  counteris =  
//  } , []) 

useEffect(() => {
 fetch(' https://api.counterapi.dev/v1').then(res=>{
  clear: both;
 })
}, [])

  return (
    <div>CountryCard</div>
  )
}

export default CountryCard
