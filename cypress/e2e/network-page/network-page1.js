import 'cypress-if';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor/lib/methods.js';
import generalPage from '../pages/general.page.js';
import networkPage from '../pages/network.page';

Given('A user opens Telnyx network page', () => {
    networkPage.visitPage()
    generalPage.cookieAccept()
})
Then('A user sees header section in a port of view', () => {
    networkPage.header().should('be.visible')
})
When('A user scrolls to security benefit element', () => {
    networkPage.secBenElem().scrollIntoView()
})
Then('A user sees security benefit element in a port of view', () => {
    networkPage.secBenElem().should('be.visible')
})
When('A user scrolls to Telnyx network diagram', () => {
    networkPage.ourNtwDscr().scrollIntoView()
})
Then('A user sees Telnyx network diagram in a port of view', () => {
    networkPage.diagramImg().should('be.visible')
})
When('A user scrolls to Virtual Cross Connects description', () => {
    networkPage.vccDescr().scrollIntoView()
})
Then('A user sees Virtual Cross Connects description in a port of view', () => {
    networkPage.vccDescr().should('be.visible')
})
When('A user scrolls to Multi-Cloud Architecture section', () => {
    networkPage.bdMultCludArch().scrollIntoView()
})
Then('A user sees Multi-Cloud Architecture section in a port of view', () => {
    networkPage.bdMultCludArch().should('be.visible')
})