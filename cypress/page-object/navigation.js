/// <reference types="cypress" />


export class Navigation {
    navigate() {
        return cy.visit('/start');
     } 
}
export const navigation = new Navigation();