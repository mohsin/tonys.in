const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});

require("@applitools/eyes-cypress")(module);
