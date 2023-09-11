/// <reference types="cypress" />

class productSearchPage {
  get #autocompleteInput() {
    return cy.get("#tbay-header .tbay-search");
  }

  get productList() {
    return cy.get("#ui-id-1 > li > a");
  }

  search(product) {
    this.#autocompleteInput.type(product);
  }
}

module.exports = new productSearchPage();
