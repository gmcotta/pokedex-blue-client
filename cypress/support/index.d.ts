/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit Google
     * @example cy.google()
     */
    google(): Chainable<Window>;
  }
}
