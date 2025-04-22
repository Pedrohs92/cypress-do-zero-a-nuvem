// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//COMANDOS CUSTOMIZADOS
Cypress.Commands.add('PreenchimentoComTelefoneObrigatorio',() => {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Santana')
    cy.get('#email').type('pedro@email.com')
    cy.get('#email').should('be.visible')
    cy.get('#phone').type(1199999999)
    cy.get('#product').select('youtube')
    cy.get('[for="phone-checkbox"]').click()
    cy.get('#open-text-area').type ('Teste')
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('PreenchimentoComEmailObrigatorio',() => {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Santana')
    cy.get('#email').type('pedro@email.com')
    cy.get('#email').should('be.visible')
    cy.get('#phone').type(1199999999)
    cy.get('#product').select('youtube')
    cy.get('[for="email-checkbox"]').click()
    cy.get('#open-text-area').type ('Teste')
    cy.get('button[type="submit"]').click()
})

