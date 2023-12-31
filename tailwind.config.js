/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Nun': ['Nunito'],
        'pop': ['Poppins']
      },
      colors: {
        'primaryColor': '#1D2022',
        'secColor': '#5C727D',
        'btnColor': '#FF5A3C',
      },
      backgroundImage: {
        'bannerBg': "url('components/src/assets/banner.png')",
      }
    },
  },
  plugins: [],
};
