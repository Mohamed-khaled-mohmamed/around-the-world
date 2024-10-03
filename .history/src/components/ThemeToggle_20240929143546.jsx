import { useState } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  const [darkMode, setdarkMode] = useState(false);

  
const toggleDarkMode = ()=>{
  document.documentElement.classList.toggle('dark')
  setdarkMode(!darkMode)
  localStorage.setItem('darkMode' , JSON.stringify(darkMode))
};
  return (
    <div className='w-11 h-6 md:w-14 md:h-8 flex  gap-2 dark:gap-1 items-center rounded-full bg-toggelLight dark:bg-toggelDark '
    onClick={toggleDarkMode}>
      <button className='w-4 h-4 md:w-6 md:h-6 bg-backgroundLight dark:bg-toggelDark rounded-full '>
      <img src={sun} alt=""  className=' w-full h-full'/>
      </button>

      <button className='w-4 h-4 md:w-6 md:h-6 bg-toggelDark  rounded-full '>
      <img src={moon} alt=""  className='dark:w-full dark:h-full'/>
      </button>

    </div>
  )
}

export default ThemeToggle
