/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#ffffff',
          surface: '#f8fafc',
          surfaceAlt: '#f1f5f9',
          card: '#ffffff',
          cardHover: '#f8fafc',
          dark: '#0f172a',
          darker: '#020617',
          blue: '#2563eb',
          blueHover: '#1d4ed8',
          blueLight: '#eff6ff',
          blueBorder: '#bfdbfe',
          cyan: '#0284c7',
          accent: '#2563eb',
          border: '#e2e8f0',
          borderDark: '#cbd5e1',
          text: '#0f172a',
          muted: '#64748b',
          badgeNew: '#0f172a',
          badgeHot: '#eff6ff',
          badgeHotText: '#1d4ed8',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}
