/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      borderRadius: {
        'rounded-section': '56% 108% 34% / 20% 20% 0% 0%',
        'md-rounded-section': '50% 50% 10% 50% / 20% 20% 0% 0%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
