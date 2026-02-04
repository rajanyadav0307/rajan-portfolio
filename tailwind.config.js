/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Inter", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
      }
    },
  },
  plugins: [],
};
