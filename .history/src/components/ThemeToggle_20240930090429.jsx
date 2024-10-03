import { useState } from 'react';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';
import { useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const storeValue = JSON.parse(localStorage.getItem('darkMode'));
    console.log(storeValue);
    document.documentElement.classList.toggle('dark', storeValue);
    setdarkMode(storeValue);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setdarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  return (
    <div className="w-11 h-6 md:w-14 md:h-8 flex  gap-2 dark:gap-1 items-center rounded-full bg-toggelLight dark:bg-toggelDark  md:mr-[95px] sm:mr-[50px] mr-[10px]" onClick={toggleDarkMode}>
      {/* <button className="w-4 h-4 md:w-6 md:h-6 bg-backgroundLight dark:bg-toggelDark rounded-full "> */}
      {/* <img src={sun} alt="" className=" w-full h-full" /> */}
      <button className="w-4 h-4 md:w-6 md:h-6  rounded-full  flex justify-center items-center bg-backgroundLight dark:bg-toggelDark">
        <svg width="16" height="15" viewBox="0 0 14 13" fill="" xmlns="http://www.w3.org/2000/svg" className="w-full h-full dark:w-full dark:h-1/5 fill-toggelDark  dark:fill-white">
          <path
            d="M7.29396 10.5089C9.50822 10.5089 11.3032 8.71388 11.3032 6.49961C11.3032 4.28534 9.50822 2.49032 7.29396 2.49032C5.07969 2.49032 3.28467 4.28534 3.28467 6.49961C3.28467 8.71388 5.07969 10.5089 7.29396 10.5089Z"
            fill=""
            className=""
          />
          <path
            d="M7.29387 0C7.1785 0 7.08411 0.0943926 7.08411 0.209761V1.38652C7.08411 1.50189 7.1785 1.59628 7.29387 1.59628C7.40924 1.59628 7.50363 1.50189 7.50363 1.38652V0.209761C7.50363 0.0943926 7.40924 0 7.29387 0Z"
            fill=""
          />
          <path
            d="M7.29387 11.4038C7.1785 11.4038 7.08411 11.4982 7.08411 11.6135V12.7903C7.08411 12.9057 7.1785 13.0001 7.29387 13.0001C7.40924 13.0001 7.50363 12.9057 7.50363 12.7903V11.6135C7.50363 11.4971 7.40924 11.4038 7.29387 11.4038Z"
            fill=""
          />
          <path
            d="M11.593 1.90357L10.7613 2.73527C10.6795 2.81708 10.6795 2.95028 10.7613 3.03208C10.8022 3.07299 10.8557 3.09396 10.9092 3.09396C10.9627 3.09396 11.0162 3.07299 11.0571 3.03208L11.8888 2.20038C11.9706 2.11857 11.9706 1.98537 11.8888 1.90357C11.807 1.82176 11.6748 1.82176 11.593 1.90357Z"
            fill=""
          />
          <path
            d="M3.52978 9.96681L2.69807 10.7985C2.61627 10.8803 2.61627 11.0135 2.69807 11.0953C2.73898 11.1362 2.79247 11.1572 2.84596 11.1572C2.89944 11.1572 2.95293 11.1362 2.99384 11.0953L3.82554 10.2636C3.90735 10.1818 3.90735 10.0486 3.82554 9.96681C3.74373 9.885 3.61158 9.885 3.52978 9.96681Z"
            fill=""
          />
          <path
            d="M13.5837 6.28965H12.4069C12.2915 6.28965 12.1971 6.38404 12.1971 6.49941C12.1971 6.61478 12.2915 6.70917 12.4069 6.70917H13.5837C13.699 6.70917 13.7934 6.61478 13.7934 6.49941C13.7934 6.38404 13.7001 6.28965 13.5837 6.28965Z"
            fill=""
          />
          <path
            d="M2.18108 6.28965H1.00432C0.888948 6.28965 0.794556 6.38404 0.794556 6.49941C0.794556 6.61478 0.888948 6.70917 1.00432 6.70917H2.18108C2.29645 6.70917 2.39084 6.61478 2.39084 6.49941C2.39084 6.38404 2.29645 6.28965 2.18108 6.28965Z"
            fill=""
          />
          <path
            d="M11.0581 9.96681C10.9763 9.885 10.8431 9.885 10.7613 9.96681C10.6795 10.0486 10.6795 10.1818 10.7613 10.2636L11.593 11.0953C11.6339 11.1362 11.6874 11.1572 11.7409 11.1572C11.7944 11.1572 11.8479 11.1362 11.8888 11.0953C11.9706 11.0135 11.9706 10.8803 11.8888 10.7985L11.0581 9.96681Z"
            fill=""
          />
          <path
            d="M2.99489 1.90357C2.91308 1.82176 2.77988 1.82176 2.69807 1.90357C2.61627 1.98537 2.61627 2.11857 2.69807 2.20038L3.52978 3.03208C3.57068 3.07299 3.62417 3.09396 3.67766 3.09396C3.73115 3.09396 3.78464 3.07299 3.82554 3.03208C3.90735 2.95028 3.90735 2.81708 3.82554 2.73527L2.99489 1.90357Z"
            fill=""
          />
        </svg>
      </button>

      {/* <button className="w-4 h-4 md:w-6 md:h-6   bg-toggelDark  rounded-full "> */}
      {/* <img src={moon} alt="" className=" dark:w-full dark:h-full" /> */}
      <button className="w-4 h-4 md:w-6 md:h-6   bg-toggelDark  dark:bg-backgroundLight rounded-full ">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:w-full dark:h-1/2 fill-white  dark:fill-toggelDark'>
          <path
            fillRule=""
            clipRule="evenodd"
            d="M12 6C12 5.90273 11.9057 5.8348 11.8115 5.85853C11.4452 5.95093 11.0617 6 10.6667 6C8.08933 6 6 3.91066 6 1.33333C6 0.938353 6.04907 0.554833 6.14147 0.188533C6.1652 0.0942333 6.09727 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12C9.31373 12 12 9.31373 12 6Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  );
}

export default ThemeToggle;
