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
          orange: '#FF5A0A',
          orangeHover: '#E64E05',
          orangeLight: '#FFF2EB',
          dark: '#0D1117',
          charcoal: '#161B22',
          muted: '#6E7681',
          surface: '#F4F3EE',
          warmWhite: '#FBFBF9',
          borderSubtle: 'rgba(13, 17, 23, 0.08)',
          borderDarkSubtle: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(13, 17, 23, 0.07)',
        'hero-card': '0 30px 60px -20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
