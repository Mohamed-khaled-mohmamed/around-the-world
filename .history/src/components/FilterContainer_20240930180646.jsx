import React from 'react'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'

function FilterContainer() {
  return (
    <div className='max-w-[1251px] mt-12 m-x-20 w-full flex  items-center'>
      <SearchBar/>
      <RegionFilter/>
    </div>
  )
}

export default FilterContainer
