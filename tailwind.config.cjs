/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#FF7F2A', // オレンジ基調
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          gold: '#FFD700'
        }
      }
    },
    plugins: []
  }
  