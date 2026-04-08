/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#FAFAFA',
        card: '#FFFFFF',
        primary: '#111111',
        secondary: '#6B7280',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
