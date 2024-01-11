/// <reference types="cypress" />
// import { AppComponent } from '../../src/app/app.component';

describe('my first test', () => {
    beforeEach('visit the page', () => {
        cy.visit('http://localhost:4200')
        
    });

    it('page shoud exist', () => {
        cy.url('http://localhost:4200').should('exist');
    });

    // it('mount the page', () => {
    //     cy.mount(AppComponent , {
    //         componentProperties: {
    //             title: 'cypress education'
    //         }
    //     })
    // })
});

