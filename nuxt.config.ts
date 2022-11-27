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
  css: [
    '@/assets/styles.css'
  ],
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
            'grayish': '#e4e4e4'
          },
          borderRadius: {
            '4xl': '2em'
          }
        }
      }
    }
  }
})
