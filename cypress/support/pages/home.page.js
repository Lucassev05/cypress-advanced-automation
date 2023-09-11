/// <reference types="cypress" />

class HomePage {
  get #magnifier() {
    return cy.get(".pull-right > .search-form-modal > .search-form > .btn");
  }

  searchMagnifier() {
    this.#magnifier.click();
  }
}

module.exports = new HomePage();
