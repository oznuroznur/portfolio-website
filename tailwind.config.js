/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' }, 
        },
        bounceX : {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2%)' },
        }
      },
      animation: {
        bounceY: 'bounceY 2s infinite',
        bounceX: 'bounceX 2s infinite', 
      },
    },
  },
  plugins: [],
};
