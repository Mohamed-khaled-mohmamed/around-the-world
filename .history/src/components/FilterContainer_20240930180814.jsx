import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function FilterContainer() {
  return (
    <div className='max-w-[12px] mt-12 px-20 w-full flex  items-center'>
      <SearchBar/>
      <RegionFilter/>
    </div>
  )
}

export default FilterContainer
