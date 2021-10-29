/// <reference types="cypress" />

import Navigation from '../page-object/navigation';

describe('Automation Task - UI', () => {
    const navigation = new Navigation();
   
    beforeEach(() => {
        navigation.navigate();       
    })

    it('Should shows the automation test of UI', () => {

    })
})