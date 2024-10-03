// قائمة منسدلة لاختيار القارة أو المنطقة.
import React from "react";
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)
Grouped





function RegionFilter() {
  return (
    <>
    RegionFilter
    </>
  )
}


export default RegionFilter
