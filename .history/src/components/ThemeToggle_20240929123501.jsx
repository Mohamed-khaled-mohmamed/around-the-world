import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  return (
    <div className='w-11 h-6 sm:w-14 sm:h-8 flex items-center rounded-full bg-toggelLight dark:bg-toggelDark '>
      <button className='w-4 h-4 sm:w-6 sm:h-6 bg-backgroundLight dark:bg-toggelDark rounded-full '>
      <img src={sun} alt=""  className=' w-full h-full'/>
      </button>

      <button className='w-4 h-4 sm:w-6 sm:h-6 bg-toggelDark dark:bg-backgroundLight rounded-full '>
      <img src={moon} alt=""  className=' w-full h-full'/>
      </button>

    </div>
  )
}

export default ThemeToggle
