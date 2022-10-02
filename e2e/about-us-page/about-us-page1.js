import 'cypress-if';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor/lib/methods.js'
import generalPage from '../pages/general.page.js'
import aboutUsPage from '../pages/aboutUs.page.js'

Given('A user opens Telnyx about us page', () => {
    aboutUsPage.visitPage()
    generalPage.cookieAccept()
})
When('A user scrolls to video player element', () => {
    aboutUsPage.vidPlay().scrollIntoView()
})
Then('A user sees video player element in a port of view', () => {
    aboutUsPage.vidPlay().should('be.visible')
})
When('A user scrolls to What makes us different section', () => {
    aboutUsPage.wmud().scrollIntoView()
})
Then('A user sees What makes us different section in a port of view', () => {
    aboutUsPage.wmud().should('be.visible')
})
When('A user scrolls to Our values section', () => {
    aboutUsPage.ourValues().scrollIntoView()
})
Then('A user sees Our values section in a port of view', () => {
    aboutUsPage.ourValues().should('be.visible')
})
When('A user scrolls to Chicago office section', () => {
    aboutUsPage.chicOffice().scrollIntoView()
})
Then('A user sees Chicago office section in a port of view', () => {
    aboutUsPage.chicOffice().should('be.visible')
})
When('A user scrolls to Telnyx brand section', () => {
    aboutUsPage.tlnxBrnd().scrollIntoView()
})
Then('A user sees Telnyx brand section in a port of view', () => {
    aboutUsPage.tlnxBrnd().should('be.visible')
})