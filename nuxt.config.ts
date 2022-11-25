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
  css: ['@/assets/styles.css'],
  modules: ['@nuxtjs/tailwindcss']
})
