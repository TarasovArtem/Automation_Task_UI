/// <reference types="cypress" />

/// <reference types="cypress" />

import {navigation} from '../page-object/navigation';
import {automation} from '../page-object/automation_UI'

describe('Automation Task - UI', () => {
   
    beforeEach(() => {
        navigation.navigate();       
    })

    it('Should shows the automation test of UI', () => {
        automation.cookieBanner();
        automation.startNowBtn();
        automation.titlePage('Which country do you live in?');
        automation.livingCountry_fieldset();
        automation.walesRadioBtn();
        automation.nextBtn();
        automation.titlePage('What is your date of birth?');
        automation.nextBtn(); //Skipping filling in the date of birth fields
        automation.errorMessage()// getting Error message
        automation.dateOfbirth('31', '07', '1961');
        automation.nextBtn();

    })
})