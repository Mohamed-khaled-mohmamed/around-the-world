import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function FilterContainer() {
  return (
    <div className='w-full flex ite'>
      <SearchBar/>
      <RegionFilter/>
    </div>
  )
}

export default FilterContainer
