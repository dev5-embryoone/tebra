const withOpacity = (variable) => ({
  opacityValue,
}) => {
  if (opacityValue === undefined) {
    return `rgb(var(${variable}))`;
  }
  return `rgb(var(${variable}) / ${opacityValue})`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      fontSize: {
        base: ['14px', { lineHeight: '24px' }],
      },
      maxWidth: {
        content: '1200px',
      },
      colors: {
        /* Brand colors powered by CSS variables.
           Change values in :root in global.css to update everywhere. */
        'tebra-hero-bg': withOpacity('--color-tebra-hero-bg'),
        'tebra-teal': withOpacity('--color-tebra-teal'),
        'tebra-teal-dark': withOpacity('--color-tebra-teal-dark'),
        'tebra-orange': withOpacity('--color-tebra-orange'),
        card: withOpacity('--color-card'),
        'border-subtle': withOpacity('--color-border-subtle'),
        'border-muted': withOpacity('--color-border-muted'),
        btn: {
          primary: withOpacity('--color-btn-primary'),
          'primary-hover': withOpacity('--color-btn-primary-hover'),
        },
      },
    },
  },
  plugins: [],
};

