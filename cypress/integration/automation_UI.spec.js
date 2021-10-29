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
        automation.whereYouLiveTxt('Which country do you live in?')
    })
})