/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-akkurat)', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', { lineHeight: '24px' }],
      },
      maxWidth: {
        content: '1200px',
      },
      colors: {
        'tebra-hero-bg': '#F7FBFB',
        'tebra-teal': '#005A57',
        'tebra-teal-dark': '#003F3B',
        'tebra-orange': '#FF6B5B',
        tebra: {
          50: '#F2FBF9',
          100: '#D9F4ED',
          200: '#B3E9DB',
          300: '#7FD8C4',
          400: '#4AC2A6',
          500: '#1B8A7E',
          600: '#15706A',
          700: '#115758',
          800: '#0C3D3F',
          900: '#082A2C',
        },
        card: '#ebf0ef',
        btn: {
          primary: '#f27e5e',
          'primary-hover': '#e06d4d',
        },
      },
    },
  },
  plugins: [],
};

