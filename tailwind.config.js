const themeDir = __dirname + '/../../'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  darkMode: 'class',
  purge: {
    content: ['layouts/**/*.html', 'content/**/*.html', , themeDir + '/hugo_stats.json'],
  },
  theme: {
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {
      height: {
        '(screen-16)': 'calc(100vh - 4rem)',
        '(16-4px)': 'calc(4rem - 4px)',
        '96': '24rem',
        '128': '32rem',
        '160': '40rem',
      },
      minHeight: {
        16: '4rem',
      },
      maxHeight: {
        'doc-sidebar': 'calc(100vh - 4rem - var(--height-doc-title, 4rem))',
      },
      lineHeight: {
        '(16-4px)': 'calc(4rem - 4px)',
      },
      inset: {
        16: '4rem',
        32: '8rem',
        48: '12rem',
      },
      padding: {
        scrollbar: 'calc(100vw - 100%)',
      },
      colors: {
        'eureka': '#38b2ac',
        'eureka-dark': '#38b2ac',
        'primary-bg': '#FFFFFF',
        'primary-bg-dark': '#000000',
        'secondary-bg': '#ffffff',
        'secondary-bg-dark': '#1c1c1e',
        'tertiary-bg': '#bbbbbb',
        'tertiary-bg-dark': '#444444',
        'primary-text': '#262626',
        'primary-text-dark': '#ffffff',
        'secondary-text': '#4d4d4d',
        'secondary-text-dark': '#b3b3b3',
        'tertiary-text': '#737373',
        'tertiary-text-dark': '#8c8c8c',
        'primary': '#444444',
        'secondary': '#222222',
        'tertiary': '#666666',
      },
      opacity: {
        0: '0',
        10: '.1',
        20: '.2',
        25: '.25',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        85: '.85',
        90: '.9',
        100: '1',
      },
      fontFamily: {
        sans: ['Lato', 'Comfortaa', ...defaultTheme.fontFamily.sans],
        heading: ['Comfortaa', ...defaultTheme.fontFamily.sans],
        content: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      typography: theme => ({
        light: {
          css: [
            {
              'color': theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              'a': {
                color: theme('colors.white'),
              },
              'strong': {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              'hr': {
                borderColor: theme('colors.gray.200'),
              },
              'blockquote': {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              'h1': {
                color: theme('colors.white'),
              },
              'h2': {
                color: theme('colors.white'),
              },
              'h3': {
                color: theme('colors.white'),
              },
              'h4': {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              'code': {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              'pre': {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              'thead': {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
