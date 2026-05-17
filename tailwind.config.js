/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom branding with WCAG 2.1 compliant contrast ratios
        brand: {
          primary: '#1d4ed8',   // Blue-700 (High contrast)
          danger: '#b91c1c',    // Red-700 (High contrast)
          surface: '#f8fafc',  // Slate-50
        }
      },
      // Adding line-clamp for the "PostDisplay" snippets
      lineClamp: {
        3: '3',
      },
      // Custom typography scale for technical blog posts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Essential for rendering markdown/blog content
    require('@tailwindcss/forms'),      // Standardizes accessible form styling
  ],
}