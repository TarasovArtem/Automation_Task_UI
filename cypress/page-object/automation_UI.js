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

    errorMessage(Text) {
        cy.get('h2#error-summary-heading').should('have.text', Text)
        cy.get('.error-message a').should('have.attr', 'href');
    }

    dateOfbirth(Day, Month, Year) {
        cy.get('#dob-day').type(Day);
        cy.get('#dob-month').type(Month);
        cy.get('#dob-year').type(Year);
    }

    infoSummary(Text) {
        cy.contains('Why we ask for your date of birth').click();
        cy.get('#details-content-0 p').should('have.text', Text);
    }

    yesCheckbox() {
        cy.get('#label-yes').click().should('have.class', 'selected');
    }

    noCheckbox() {
        cy.get('#label-no').click().should('have.class', 'selected');
    }

   

}
export const automation = new Automation();