import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  return (
    <button className='w-14 bg-backgroundDark flex h-8 roun'>
      <img src={sun} alt="toggel button" />
      <img src={moon} alt="toggel button" />
    </button>
  )
}

export default ThemeToggle
