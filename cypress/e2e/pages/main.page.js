class mainPage {
    visitPage(){
        cy.visit('https://telnyx.com/')
    }

    exploreProducts() {
        return cy.get('.epRMTm')
    }

    customerStory() {
        return cy.get('.iUGSsE')
    }

    switchSave() {
        return cy.get('.fjgfOb')
    }

    reviews() {
        return cy.get('.dLoFKM')
    }

    footer() {
        return cy.get('.dKHwUU')
    }
}

export default new mainPage()