//يتضمن العنوان (Logo) وزر التبديل بين الوضع الليلي والوضع الفاتح، بالإضافة إلى قائمة البحث.
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.svg' // Import the logo

function Navbar() {
  return (
    <div className=' bg-backgroundLight dark:bg-backgroundDark  shadow-md flex items-center justify-between'>



<div className="flex gap-3 items-center py-6 md:pl-[95px] max-md:pl-[50px]">
  <a href="/">
    <img src={logo} alt="Logo" />
  </a>
  <span className='md:text-2xl font-semibold dark:text-textDark' >Around the world</span>
</div>

      <ThemeToggle />
    </div>
  )
}

export default Navbar
