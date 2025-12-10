/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#071D33",
        "brand-blue": "#1E88E5",
        "brand-electric": "#48C0FF",
        "brand-white": "#FFFFFF",
        "brand-soft": "#F5F7FA",
        "brand-slate": "#64748B",
        "brand-dark": "#1E293B",
        "brand-border": "#E2E8F0",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #071D33 0%, #0A2A43 40%, #1E88E5 100%)",
      },
    },
  },
  plugins: [],
};
