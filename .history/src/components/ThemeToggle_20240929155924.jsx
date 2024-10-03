import { useState } from 'react';
import { useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const storeValue = localStorage.getItem('darkMode');
    document.documentElement.classList.toggle('dark', storeValue);
    setdarkMode(storeValue);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setdarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };
  return (
    <div className="w-11 h-6 md:w-14 md:h-8 flex  gap-2 dark:gap-1 items-center rounded-full bg-toggelLight dark:bg-toggelDark  md:mr-[95px] sm:mr-[50px] mr-[10px] " onClick={toggleDarkMode}>
<button className="w-4 h-4 md:w-6 md:h-6 bg-backgroundLight dark:bg-toggelDark rounded-full flex items-center justify-center">
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full dark:hidden text-gray-800" // الشمس تظهر في الوضع الفاتح وتختفي في الوضع الداكن
  >
    <path d="M7.29396 10.5089C9.50822 10.5089 11.3032 8.71388 11.3032 6.49961C11.3032 4.28534 9.50822 2.49032 7.29396 2.49032C5.07969 2.49032 3.28467 4.28534 3.28467 6.49961C3.28467 8.71388 5.07969 10.5089 7.29396 10.5089Z" />
    {/* باقي الأجزاء الخاصة بأيقونة الشمس */}
  </svg>

  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden dark:block w-full h-full text-white" // القمر يظهر فقط في الوضع المظلم
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C12 5.90273 11.9057 5.8348 11.8115 5.85853C11.4452 5.95093 11.0617 6 10.6667 6C8.08933 6 6 3.91066 6 1.33333C6 0.938353 6.04907 0.554833 6.14147 0.188533C6.1652 0.0942333 6.09727 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12C9.31373 12 12 9.31373 12 6Z" fill="currentColor" />
  </svg>
</button>

    </div>
  );
}

export default ThemeToggle;
