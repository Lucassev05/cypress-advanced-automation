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
Cypress.Commands.add("adicionarProdutoCarrinho", () => {
  const fd = new FormData();
  fd.append("add-to-cart", "10132");
  fd.append("quantity", "1");

  cy.request({
    url: "/product/moleton-rosa-feminino",
    method: "POST",
    body: fd,
  });
  // Aparentemente o cypress já guarda automaticamente os cookies quando roda uma chamada na api e acessa a tela, então o then foi removido.
  // .then((resp) => {
  // resp.headers["set-cookie"].forEach((cookie) => {
  //   const firstPart = cookie.split(";")[0];
  //   const divisor = firstPart.indexOf("=");
  //   const key = firstPart.substring(0, divisor);
  //   const value = firstPart.substring(divisor + 1);
  //   cy.setCookie(key, value);
  // });
  // });
});

Cypress.Commands.add("realizarLogin", (email, password) => {
  const fd = new FormData();
  fd.append("_wp_http_referer", "/minha-conta");
  fd.append("login", "Login");
  fd.append("password", password);
  fd.append("username", email);
  fd.append("woocommerce-login-nonce", "ed52a2e41a");

  cy.request({
    url: "/minha-conta",
    method: "POST",
    body: fd,
  });
  // Aparentemente o cypress já guarda automaticamente os cookies quando roda uma chamada na api e acessa a tela, então o then foi removido.
  // .then((resp) => {
  //   resp.allRequestResponses[1]["Response Headers"]["set-cookie"].forEach(
  //     (cookie) => {
  //       const firstPart = cookie.split(";")[0];
  //       const divisor = firstPart.indexOf("=");
  //       const key = firstPart.substring(0, divisor);
  //       const value = firstPart.substring(divisor + 1);
  //       cy.setCookie(key, value);
  //     }
  //   );
  // });
});
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
