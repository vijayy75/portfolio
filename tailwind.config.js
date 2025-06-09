export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCard: "#1f233f",
      },
      boxShadow: {
        glow: '0 0 15px rgba(139, 92, 246, 0.6)',
      },
      transitionProperty: {
        scale: 'transform',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-gradient': 'spinGradient 4s linear infinite', // ✅ NEW
      },
      keyframes: {
        // ✅ NEW
        spinGradient: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
