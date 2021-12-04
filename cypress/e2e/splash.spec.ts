/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

describe('Splash Screen', () => {
  it('should redirect to Pokémon list page', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /iniciar/i }).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pokemon-list`);
  })
})
