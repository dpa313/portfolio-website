/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // primary: 'Fira Code, monospace;'
      // primary:'Raleway, sans-serif'
      primary:'Urbanist, sans-serif'
      // primary: 'Poppins, sans-serif;'
    },
    extend: {
      colors: {
        // primary: '#00F0A8'
        // primary: '#00BFFF',
        primary: '#333333'
      }
    },
    backgroundImage: {
      banner: 'url("./src/assets/img/banner.jpg")',
      about: 'url("./src/assets/img/")',
      // site: 'url("./src/assets/img/site.jpg")',
      'mygradient': 'linear-gradient(90deg,#b2fefa 52%, #92fe9d 81%)'
    }
  },
  plugins: [],
}

