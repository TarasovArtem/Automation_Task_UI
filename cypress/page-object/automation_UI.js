/// <reference types="cypress" />

export class Automation {

    cookieBanner() {
        cy.get('#nhsuk-cookie-banner__link_accept').click();
    }
    
    startNowBtn() {
        cy.contains('Start now').click();
    }

    whereYouLiveTxt(Text) {
        cy.title().should('include', Text)
    }
}
export const automation = new Automation();