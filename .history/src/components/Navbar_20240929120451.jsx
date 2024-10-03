//يتضمن العنوان (Logo) وزر التبديل بين الوضع الليلي والوضع الفاتح، بالإضافة إلى قائمة البحث.
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.svg' // Import the logo

function Navbar() {
  return (
    <div className=' bg-backgroundL dark:bg-backgroundDark  shadow-md flex items-center justify-between'>



<div className="flex gap-3 items-center py-6 sm:pl-[95px]">
  <a href="/">
    <img src={logo} alt="Logo" />
  </a>
  <span className='sm:text-2xl font-semibold' >Around the world</span>
</div>

      <ThemeToggle />
    </div>
  )
}

export default Navbar
