const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
      },
      fontSize: {
        xxs: ".625rem",
      },
      margin: {
        "80vh": "80vh",
        "1/5": "20%",
      },
      height: {
        "50vh": "50vh",
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
        ]
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
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
};
