const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './dist/**/*.html',
  ],
  theme: {
    extend: {
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        "80vh": "80vh",
        "1/5": "20%",
        "1/6": "16.6666667",
        '16/9': '56.25%'
      },
      transitionDuration: {
        "0": "0ms",
      },
      fontSize: {
        xxs: ".625rem",
        xxl: "8rem",
        huge: "10rem",
      },
      height: {
        "50vh": "50vh",
      },
      width: {
        "50vh": "50vh",
      },
      inset: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6':  '1.5rem',
        '8':  '2rem',
        '10':	'2.5rem',
        '12':	'3rem',
        '16':	'4rem',
        '20':	'5rem',
        '24':	'6rem',
        '32':	'8rem',
        '40':	'10rem',
        '48':	'12rem',
        '50': '12.5rem',
        '56':	'14rem',
        '64':	'16rem',
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333334%',
        '1/5': '20%',
        "1/6": "16.6666667%",
        "1/8": "12.5%",
        "1/10": "10%",
        "5/4":"80%",
      },
      fontFamily: {
        mh: "'Space Mono', monospace",
        body: "'Lato', sans-serif",
        mono: [
          'Space Mono',
          ...defaultTheme.fontFamily.mono
        ],
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ],
        base: [
          ...defaultTheme.fontFamily.sans,
        ],
      },
      minHeight: {
        '64': '16rem',
      },
      minWidth: {
        '64': '16rem',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/3': '33.333333vh',
        '1/2': '50vh',
        '2/3': '66.66666vh',
        '3/4': '75vh',
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-lighter": "var(--color-primary-lighter)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-active": "var(--color-primary-active)",

        secondary: "var(--color-secondary)",
        "secondary-lighter": "var(--color-secondary-lighter)",
        "secondary-hover": "var(--color-secondary-hover)",
        "secondary-active": "var(--color-secondary-active)",

        tertiary: "var(--color-tertiary)",
        "tertiary-lighter": "var(--color-tertiary-lighter)",
        "tertiary-hover": "var(--color-tertiary-hover)",
        "tertiary-active": "var(--color-tertiary-active)",

        accent: "var(--color-accent)",

        border: "var(--color-border)",
        shadow: "var(--color-shadow)",
        "shadow-lighter": "var(--color-shadow-lighter)",
        gray: {
          100: "#F6F6F6",
          200: "#EEEEEE",
          300: "#E2E2E2",
          400: "#CBCBCB",
          500: "#AFAFAF",
          600: "#757575",
          700: "#545454",
          800: "#333333",
          900: "#222222",
        },
      },
      borderColor: (theme) => ({ default: theme("colors.border") }),
    },
    aspectRatio: { // defaults to {}
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      '3/4': [3, 4],
      "21/9": [21, 9],
      '3/2': [3, 2],
      '2/1': [2, 1],
      '6/1': [6, 1],
      '6/7': [6, 7],
    },
    container: {
      center: true,
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transformOrigin: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus',  'group-hover'],
    transition: ['responsive', 'hover', 'focus',  'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus','group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
};
