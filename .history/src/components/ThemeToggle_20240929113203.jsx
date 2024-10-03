import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  return (
    <div className='w-14 bg-backgroundDark flex h-8 rounded-full '>
      <img src={sun} alt="toggel button" className='text-backgroundLight' />
      <img src={moon} alt="toggel button" />
    </div>
  )
}

export default ThemeToggle
