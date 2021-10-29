/// <reference types="cypress" />

export class Automation {

    cookieBanner() {
        cy.get('#nhsuk-cookie-banner__link_accept').click();
    }
    
    startNowBtn() {
        cy.contains('Start now').click();
    }

    titlePage(Text) {
        cy.title().should('include', Text)
    }

    livingCountry_fieldset() {
        cy.get('#livingCountry_fieldset > label').should(($livingCountry) => {
            expect($livingCountry).to.contain('England')
            expect($livingCountry).to.contain('Scotland')
            expect($livingCountry).to.contain('Wales')
            expect($livingCountry).to.contain('Northern Ireland')
        })
    }

    walesRadioBtn() {
        cy.get('#label-wales').click().should('have.class', 'selected');
    }

    nextBtn() {
        cy.get('#next-button').click();
    }

    errorMessage() {
        cy.get('h2#error-summary-heading').should('have.text', '\n\t\t\t\t\t\tThere is a problem\n        \t')
        cy.get('.error-message a').should('have.attr', 'href');
        cy.contains('Enter your date of birth').click();
    }

    dateOfbirth(Day, Month, Year) {
        cy.get('#dob-day').type(Day);
        cy.get('#dob-month').type(Month);
        cy.get('#dob-year').type(Year);
    }



}
export const automation = new Automation();