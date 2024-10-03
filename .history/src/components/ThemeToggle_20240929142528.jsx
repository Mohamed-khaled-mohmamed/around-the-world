import { useState } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  const [darkMode, setdarkMode] = useState(false)

  Ha
  return (
    <div className='w-11 h-6 sm:w-14 sm:h-8 flex  gap-2 dark:gap-1 items-center rounded-full bg-toggelLight dark:bg-toggelDark '
    onClick={}>
      <button className='w-4 h-4 sm:w-6 sm:h-6 bg-backgroundLight dark:bg-toggelDark rounded-full '>
      <img src={sun} alt=""  className=' w-full h-full'/>
      </button>

      <button className='w-4 h-4 sm:w-6 sm:h-6 bg-toggelDark  rounded-full '>
      <img src={moon} alt=""  className='dark:w-full dark:h-full'/>
      </button>

    </div>
  )
}

export default ThemeToggle
