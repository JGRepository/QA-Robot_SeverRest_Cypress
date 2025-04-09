const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      mochawesome(on); // ← aqui ativa o plugin
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
