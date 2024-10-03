import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function FilterContainer() {
  return (
    <div className='   w-full flex  items-center'>
      <SearchBar/>
      <RegionFilter/>
    </div>
  )
}

export default FilterContainer
