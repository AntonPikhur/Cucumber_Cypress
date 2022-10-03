class networkPage {
    visitPage(){
        cy.visit('https://telnyx.com/solutions/global-ip-network')
    }

    header() {
        return cy.get('body>div>div>header')
    }

    secBenElem() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(3) li:first-child')
    }

    ourNtwDscr() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(4)>div>div:nth-child(3) p')
    }

    diagramImg() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(4)>div>div:nth-child(3) picture:first-child img')
    }

    vccDescr() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(8) p')
    }

    bdMultCludArch() {
        return cy.get('main>div:nth-child(2)>div>div:nth-child(10) li:nth-child(5)')
    }
}

export default new networkPage()