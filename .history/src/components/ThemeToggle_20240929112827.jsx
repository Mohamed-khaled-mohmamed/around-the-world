import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  return (
    <button className='w-14 bg-backgroundDark flex h-'>
      <img src={sun} alt="toggel button" />
      <img src={moon} alt="toggel button" />
    </button>
  )
}

export default ThemeToggle
