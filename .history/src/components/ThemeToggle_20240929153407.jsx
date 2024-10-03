import { useState, useEffect } from 'react';
import moon from '../assets/moon.svg'; // تأكد من وجود هذا الملف

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', storedValue);
    setDarkMode(storedValue);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div 
      className="w-11 h-6 md:w-14 md:h-8 flex items-center rounded-full bg-toggelLight dark:bg-toggelDark md:mr-[95px] sm:mr-[50px] mr-[10px] relative cursor-pointer"
      onClick={toggleDarkMode}
    >
      <div 
        className={`w-4 h-4 md:w-6 md:h-6 rounded-full transition-all duration-300 absolute ${
          darkMode ? 'bg-white right-1' : 'bg-gray-800 left-1'
        }`}
      >
        {darkMode ? (
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-800">
            <path d="M7.29396 10.5089C9.50822 10.5089 11.3032 8.71388 11.3032 6.49961C11.3032 4.28534 9.50822 2.49032 7.29396 2.49032C5.07969 2.49032 3.28467 4.28534 3.28467 6.49961C3.28467 8.71388 5.07969 10.5089 7.29396 10.5089Z" fill="currentColor"/>
          </svg>
        ) : (
          <img src={moon} alt="Moon" className="w-full h-full" />
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;
