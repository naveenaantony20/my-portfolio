/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // tells Tailwind to scan all React files
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B1120",
        primary: "#60A5FA", // blue-400
        accent: "#C084FC", // purple-400
      },
      backgroundImage: {
        "glow-left":
          "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 60%)",
        "glow-right":
          "radial-gradient(circle at 80% 70%, rgba(168,85,247,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(96,165,250,0.3)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
