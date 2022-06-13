module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
    './nuxt.config.js',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Syne',
          'Nunito',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E9AF98',
          secondary: '#405CA0',
          accent: '#AD6E9E',
          neutral: '#40404A',
          'base-100': '#FCFCFC',
          'base-200': '#F1F2F8',
          info: '#3A73D4',
          success: '#72E9C1',
          warning: '#F6D73C',
          error: '#E83B55',
        },
      },
      'dark',
    ],
  },
}
