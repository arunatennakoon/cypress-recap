const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:8080',
    specPattern: "cypress/**/*.spec.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
