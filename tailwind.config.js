/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#202020",
        accent: "#554DB7",
        surface: "#212121",
        blackTertiary: "#121213",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        neutrals:{
          400: "#A3A3A3",
        },
        // 
        gradient: {
          primary: "linear-gradient(287.84deg, rgba(102, 126, 234, 0.231) 44.52%, rgba(144, 75, 162, 0) 71.09%),linear-gradient(0deg, #D5D5D5, #D5D5D5)",
        },
      },
    },
  },
  plugins: [],
  important: true,
}

