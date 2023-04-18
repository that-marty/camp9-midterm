/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1C1C27',
        'dark-light': '#363740',
        'white-dimmed': 'rgba(255, 255, 255, 0.4)',
        'white-dimmed-heavy': 'rgba(255, 255, 255, 0.2)',
        red: '#EF4444',
        green: '#22C55E',
        yellow: '#FFB43A',
      },
    },
  },
  plugins: [],
};
