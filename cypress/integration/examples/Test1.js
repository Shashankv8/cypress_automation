/// <reference types = "Cypress"/>

describe("My First Test Suite", function () {
  it("TestCase1", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get('.product:visible').should('have.length',4)
    //Parent Child chaining-----------
    // cy.get('.products').find('.product').should('have.length',4)
    //click on the Add to cart Button..
    // cy.get('.products .product').eq(1).contains('ADD TO CART').click()
    // cy.get('.products').find('.product').each(el => {
    //     const name = el.find(".product-name").text()
    //     if(name.includes("Carrot")) {
    //         // cy.wrap(el).contains('ADD TO CART').click()
    //         // cy.wrap(el).find('button').click()
    //    }
    //})
    // cy.get(".products")
    //   .find(".product")
    //   .as("product-card")
    //   .each((el) => {
    //     const name = el.find(".product-name").text();
    //     if (name.includes("Cashews")) {
    //       cy.log("Element found!!!!!!!!!!!!!!!!!");
    //       cy.wrap(el).find(".increment").click();
    //     }
    //   });

    // cy.get("@product-card").each((el) => {
    //   const name = el.find(".product-name").text();
    //   if (name.includes("Cauliflower")) {
    //     cy.log("Element found!!!!!!!!!!!!!!!!!");
    //     cy.wrap(el).find(".increment").click();
    //   }
    // });

    cy.get(".brand").should("have.text", "GREENKART");
  });
});
