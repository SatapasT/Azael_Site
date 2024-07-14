module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", "*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '5%, 20%': { textShadow: '0 0 10px rgba(255, 0, 0, 0.1), 0 0 20px rgba(255, 0, 0, 0.3), 0 0 20px rgba(255, 0, 0, 0.2)' },
          '10%': { textShadow: '0 0 10px rgba(255, 0, 0, 0.2), 0 0 30px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.3)' },
        },
      },
      animation: {
        glow: 'glow 10s infinite',
      },
    },
  },
  plugins: [],
};
