/// <reference types="cypress" />

describe("Carrinho", () => {
  before("Acessa site", () => {
    cy.adicionarProdutoCarrinho();
    cy.visit("/carrinho");
  });

  it("Editar produto", () => {});

  it("Remover produto", () => {});
});
