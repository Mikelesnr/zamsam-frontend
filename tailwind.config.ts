// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Adjust paths as needed
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- New Extended Colors & Fonts ---
      colors: {
        // Map custom CSS variables to Tailwind utility classes
        "zamsam-blue": "var(--color-primary-blue)",
        "zamsam-cyan": "var(--color-accent-cyan)",
      },
      fontFamily: {
        // Map the font CSS variables to Tailwind utility classes
        sans: ["var(--font-roboto)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
        mono: ["var(--font-geist-mono)"],
      },
      // You can also add custom background and text colors if desired:
      // backgroundColor: {
      //    'page-bg': 'var(--background)',
      // },
      // textColor: {
      //    'page-fg': 'var(--foreground)',
      // },
      // ------------------------------------
    },
  },
  plugins: [],
};
