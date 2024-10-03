import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

function ThemeToggle() {
  return (
    <button className='w-12'>
      <img src={sun} alt="toggel button" />
      <img src={moon} alt="toggel button" />
    </button>
  )
}

export default ThemeToggle
