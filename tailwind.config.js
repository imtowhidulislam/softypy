/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerClr : "#26ADE2",
        messageBg : "#E6F8FF",
        button : "#4AB449",
        contactBar : "#E9F6E9",
        navbarClr : "#E6F8FF",
        searchBtn : "#19ABE3",
        productBtn : "#4AB449",
        productTitle : "#092E3D",
      },
      backgroundImage:{
        backgroundGradient : " linear-gradient(180deg, rgba(230, 248, 255, 0.33) 0%, rgba(229, 248, 255, 0.33) 100%)",

      },
      boxShadow:{
        shadowOne : "0px 2px 12px rgba(25, 171, 227, 0.3)"
      },
      gridTemplateColumns:{
        responsiveLayout: 'repeat(auto-fit, minmax(14rem, 1fr))'
      }
    },
  },
  plugins: [],
}

