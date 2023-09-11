/// <reference types="cypress" />

const homePage = require("../support/pages/home.page");
const productSearchPage = require("../support/pages/productSearch.page");
const data = require("../fixtures/search.json");

describe("Carrinho", () => {
  before("Acessa site", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/wp-admin/admin-ajax*",
        query: {
          term: "Jacket",
        },
      },
      (req) => {
        req.reply({
          statusCode: 200,
          body: `${req.query.callback}(
						${JSON.stringify(data.autocompleteSearchData)}
    			)`,
        });
      }
    );
    cy.visit("/");
  });

  it("Pesquisar produto", () => {
    homePage.searchMagnifier();
    productSearchPage.search("Jacket");
    productSearchPage.productList
      .first()
      .should("have.attr", "title", "EBAC Intercept Test");
  });
});
