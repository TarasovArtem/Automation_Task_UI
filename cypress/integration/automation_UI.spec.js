/// <reference types="cypress" />

/// <reference types="cypress" />

import {navigation} from '../page-object/navigation';
import {automation} from '../page-object/automation_UI'

describe('Automation Task - UI', () => {
    before(() => {
        navigation.navigate();
    })

    beforeEach(() => {
        //automation.cookieBanner();
        Cypress.Cookies.preserveOnce('SESSION', 'nhsuk-cookie-consent')       
    })

    it('Should show the page with name: Check what help you could get to pay for NHS costs', () => {    
        automation.titlePage('Check what help you could get to pay for NHS costs');
        automation.startNowBtn();
    })

    it('Should shows the page with name: Which country do you live in?', () => {
        automation.titlePage('Which country do you live in?');
        automation.livingCountry_fieldset();
        automation.walesRadioBtn();
        automation.nextBtn();
    })

    it('Should shows the page with name: What is your date of birth?', () => {
        automation.titlePage('What is your date of birth?');
        automation.nextBtn(); //Skipping filling in the date of birth fields
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t')// getting Error message
        automation.dateOfbirth('31', '07', '1961');
        automation.infoSummary('\n\t\t\t\t\t     We use your date of birth to work out your age. Depending on where you live, your age could entitle you to help with NHS costs, such as free prescriptions or dental treatment.\n\t\t\t\t\t    ')
        automation.nextBtn();
    })

    it('Should shows the page with name: Do you live with a partner?', () => {
        automation.titlePage('Do you live with a partner?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.yesCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: Do you or your partner claim any benefits or tax credits?', () => {
        automation.titlePage('Do you or your partner claim any benefits or tax credits?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.noCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: Are you pregnant or have you given birth in the last 12 months?', () => {
        automation.titlePage('Are you pregnant or have you given birth in the last 12 months?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.noCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: Do you have an injury or illness caused by serving in the armed forces?', () => {
        automation.titlePage('Do you have an injury or illness caused by serving in the armed forces?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.noCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: Do you or your partner live permanently in a care home?', () => {
        automation.titlePage('Do you or your partner live permanently in a care home?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.noCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: Do you and your partner have more than £16,000 in savings, investments or property?', () => {
        automation.titlePage('Do you and your partner have more than £16,000 in savings, investments or property?');
        automation.nextBtn();
        automation.errorMessage('\n\t\t\t\t\t\tThere is a problem\n        \t');
        automation.noCheckbox();
        automation.nextBtn();
    })

    it('Should shows the page with name: You get help with health costs', () => {
        automation.titlePage('You get help with health costs');
    })
})