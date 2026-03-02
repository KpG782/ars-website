/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3DB3A9',
          50: '#E8F6F5',
          100: '#D1EDE9',
          200: '#A3DBD4',
          300: '#75C9BE',
          400: '#6DCCC4',
          500: '#3DB3A9',
          600: '#2A8A82',
          700: '#1F6760',
          800: '#154440',
          900: '#0A2120',
        },
        secondary: {
          DEFAULT: '#2D2D3A',
          900: '#2D2D3A',
          800: '#3D3D4A',
          700: '#4D4D5A',
        },
        accent: {
          yellow: '#F5C842',
          500: '#F5C842',
          600: '#d9a018',
        },
        surface: '#FAFAFA',
        card: '#FFFFFF',
        onSurface: '#1A1A2E',
        subtitle: '#6B7280',
        border: '#E5E7EB',
        error: '#EF4444',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'button': '28px',
        'input': '14px',
        'card': '16px',
        'hero': '32px',
      },
    },
  },
  plugins: [],
}
