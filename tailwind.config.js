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
    fontFamily:{
      "redHat" :["Red Hat Text", "sans-serif"]
    },
    fontSize: {
      'preset1': ['56px', {
        lineHeight: '120%',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'preset2': ['24px', {
        lineHeight: '125%',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'preset3': ['16px', {
        lineHeight: '150%',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'preset4': ['14px', {
        lineHeight: '150%',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'preset4bold': ['14px', {
        lineHeight: '150%',
        letterSpacing: '0',
        fontWeight: '600',
      }]
    }

  },
}