/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './styles/global.css',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // لون رئيسي للمشروع (الأزرق الداكن)
        secondary: "#2563EB", // لون ثانوي
        backgroundLight: "#F9FAFB", // لون الخلفية الفاتح
        backgroundDark: "#1F2937", // لون الخلفية الداكن
        cardLight: "#F9FAFB", // لون الكارد في الوضع الفاتح
        cardDark: "#334155", // لون الكارد في الوضع الداكن
        textLight: "#1F2937", // لون النص في الوضع الفاتح
        textDark: "#FFFFFF", // لون النص في الوضع الداكن
        borderLight: "#E5E7EB", // لون الحدود في الوضع الفاتح
        borderDark: "#475569", // لون الحدود في الوضع الداكن
        hover: "#3B82F6", // لون عند التمرير
        mainContentLight: "#F3F4F6",
        mainContenDark: "#111827",
        toggelDark:'#111827',
        toggelLight:'#1F2937'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
