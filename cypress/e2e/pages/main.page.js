class mainPage {
    visitPage(){
        cy.visit('https://telnyx.com/')
    }

    exploreProducts() {
        return cy.get('main>div:nth-child(2) div:nth-child(4) ul')
    }

    customerStory() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(5)')
    }

    switchSave() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(8)>div>div:first-child')
    }

    reviews() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(14)>div')
    }

    footer() {
        return cy.get('main~footer')
    }
}

export default new mainPage()