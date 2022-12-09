const plugin = require('tailwindcss/plugin')
const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    }
  })
});

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Strongly Typed by HTML5 UP',
      meta: [
        { name: 'description', content: 'Tony\s school' }
      ],
      script: [
        { type: 'text/javascript', src: 'js/jquery.min.js', body: true },
        { type: 'text/javascript', src: 'js/jquery.dropotron.min.js', body: true },
        { type: 'text/javascript', src: 'js/browser.min.js', body: true },
        { type: 'text/javascript', src: 'js/breakpoints.min.js', body: true },
        { type: 'text/javascript', src: 'js/util.js', body: true },
        { type: 'text/javascript', src: 'js/main.js', body: true }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  tailwindcss: {
    config: {
      content: [],
      theme: {
        screens: {
          'sm': '736px',
          'md': '980px',
          'lg': '1280px',
          'xl': '1680px'
        },
        extend: {
          colors: {
            'gandalf-gray': '#878787',
            'grayish': '#e4e4e4',
            'offwhite': '#f0f0f0'
          },
          borderRadius: {
            '4xl': '2em'
          },
          fontFamily: {
            common: ['Source Sans Pro', 'sans-serif'],
            heading: ['Arvo', 'Rockwell', 'Courier', 'monospace']
          }
        }
      },
      plugins: [backfaceVisibility]
    }
  }
})
