class aboutUsPage {
    visitPage(){
        cy.visit('https://telnyx.com/company/about')
    }

    vidPlay() {
        return cy.get('main>div iframe')
    }

    wmud() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(2)')
    }

    ourValues() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(3)')
    }

    chicOffice() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(4) li:nth-child(1)')
    }

    tlnxBrnd() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(6)')
    }
}

export default new aboutUsPage()