/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '680px',
      },
      boxShadow: {
        'card-hover': '0 12px 40px rgba(139, 158, 124, 0.15)',
        'card': '0 4px 16px rgba(139, 158, 124, 0.08)',
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      colors: {
        // Primary: Sage green (based on #8B9E7C) - calm, natural, healing
        primary: {
          50: '#f4f6f1',
          100: '#e6ecdf',
          200: '#cedac2',
          300: '#afc09e',
          400: '#8b9e7c', // Base sage green
          500: '#728564',
          600: '#5a6b4e',
          700: '#485540',
          800: '#3b4535',
          900: '#31392c',
          950: '#181e15',
        },
        // Secondary: Warm beige - gentle, nurturing, professional
        secondary: {
          50: '#fdfcf8',
          100: '#faf7f0',
          200: '#f4eddf',
          300: '#ecdfc9',
          400: '#e0ccac',
          500: '#d4b88e',
          600: '#c09a6a',
          700: '#a07f52',
          800: '#836644',
          900: '#6b5339',
          950: '#392b1d',
        },
        // Accent: Warm taupe - grounded, earthy, professional
        accent: {
          50: '#f7f5f2',
          100: '#ede8e1',
          200: '#dbd0c3',
          300: '#c4b19e',
          400: '#ac9079',
          500: '#9a7a62',
          600: '#8a6a54',
          700: '#725646',
          800: '#5e473b',
          900: '#4e3c33',
          950: '#291f1a',
        },
        // Warm beige cream for backgrounds and accents
        gold: {
          300: '#e8d8bc',
          400: '#d4c5a9', // Base warm beige
          500: '#c4b08e',
          600: '#b09270',
          700: '#927556',
        },
      },
    },
  },
  plugins: [],
};
