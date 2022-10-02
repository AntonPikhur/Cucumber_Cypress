-----------------------------------------------------

Anton Pikhur. 02.10.2022

-----------------------------------------------------
Description:

Here you can find 15 test cases of Telnyx website (https://telnyx.com/). They created using Cucumber+Cypress e2e. Reports with Mochawsome.
Test cases:      ./Test_Cases.pdf
Test scenarios:  cypress/e2e/*.feature
Page objects:    cypress/e2e/pages/*.js
Reports:         cypress/report/mochawesome-report/*.json

Steps to use:
1. Install Visual Studio Code (VSC) from --> https://code.visualstudio.com/ .
2. Install Node.js from --> https://nodejs.org/uk/ .
3. Install Java from --> https://www.java.com/ru/download/ .
4. Clone or download this repository.
5. Open repository folder in VSC.
6. Create terminal with hotkeys Ctrl + Shift + ` .
7. Install Cypress framework, instruction --> https://docs.cypress.io/guides/getting-started/installing-cypress .
8. Install Cucumber with " npm install @badeball/cypress-cucumber-preprocessor ".
9. Use in terminal " npm i -D cypress-if " to instal Cypress-if plugin.
10. Use in terminal "   npm install mocha
                        npm install mochawesome --save-dev
                        npm install mochawesome-merge --save-dev "
11. " npm test " - run tests with default config file
12. " npm test_conf1 " - run tests with specific config file (Viewport changed to 1366x768)


------------------------------------------------------