import 'cypress-if';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor/lib/methods.js'
import generalPage from '../pages/general.page.js'
import mainPage from '../pages/main.page.js'

Given('A user opens Telnyx main page', () => {
    mainPage.visitPage()
    generalPage.cookieAccept()
})
When('A user scrolls to Explore product section', () => {
    mainPage.exploreProducts().scrollIntoView()
})
Then('A user sees Explore product section in a port of view', () => {
    mainPage.exploreProducts().should('be.visible')
})
When('A user scrolls to Customer story section', () => {
    mainPage.customerStory().scrollIntoView()
})
Then('A user sees Customer story section in a port of view', () => {
    mainPage.customerStory().should('be.visible')
})
When('A user scrolls to Switch + Save section', () => {
    mainPage.switchSave().scrollIntoView()
})
Then('A user sees Switch + Save section in a port of view', () => {
    mainPage.switchSave().should('be.visible')
})
When('A user scrolls to Reviews section', () => {
    mainPage.reviews().scrollIntoView()
})
Then('A user sees Reviews section in a port of view', () => {
    mainPage.reviews().should('be.visible')
})
When('A user scrolls to footer section', () => {
    mainPage.footer().scrollIntoView()
})
Then('A user sees footer section in a port of view', () => {
    mainPage.footer().should('be.visible')
})
