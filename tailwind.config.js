/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		gridTemplateColumns:{
				'two': 'repeat(2, 70% 30%)'
			}
  	},

  },
  plugins: [require("tailwindcss-animate")],
}