const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
e2e: {
viewportWidth: 1920,
viewportHeight: 1080,  
async setupNodeEvents(on, config) {
const bundler = createBundler({
plugins: [createEsbuildPlugin(config)],
});

on("file:preprocessor", bundler);
await addCucumberPreprocessorPlugin(on, config);

return config;
},
specPattern: "cypress/e2e/**/*.feature",
video: false,
"reporter": "mochawesome",
     "reporterOptions": {
       "charts": true,
       "overwrite": false,
       "html": false,
       "json": true,
       "reportDir": "cypress/report/mochawesome-report"
     }
},
});

