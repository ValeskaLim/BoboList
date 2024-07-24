const { text } = require('express')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'dosis': ['Dosis']
    }
  },
  plugins: [],
}

