import { useEffect } from 'react';

function CountryList({ setCountries }) {
  useEffect(() => {
    // جلب الدول من localStorage أو تعيينها إذا كانت موجودة
    const storedCountries = JSON.parse(localStorage.getItem('countries')) || [];

    if (storedCountries.length === 0) {
      // إذا كانت الدول غير موجودة في localStorage، يتم جلبها من API
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched countries from API:', data);
          setCountries(data);
          // تخزين البيانات في localStorage
          localStorage.setItem('countries', JSON.stringify(data));
        })
        .catch((error) => console.error('Error fetching countries:', error));
    } else {
      // إذا كانت الدول موجودة في localStorage، استخدمها مباشرة
      console.log('Loaded countries from localStorage:', storedCountries);
      setCountries(storedCountries);
    }
  }, [setCountries]);
}

export default CountryList;
