/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      red:'#c73b0f',
      rose900:'#260f08',
      rose500:'#87635a',
      rose400:'#ad8a85',
      rose300:'#caafa7',
      rose100:'#f5eeec',
      rose50:'#fcf8f6',
      green:'#1ea575',
      black:'#000000',
      white:'#ffffff',

    },
    fontSize:{
      preset1:{
        size:'56px',
        line:'120%'
      }
    }

  },
  plugins: [require("tailwindcss-animate")],
}