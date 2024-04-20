describe("My First Practice Suite", function () {
  it("TestCase2", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.wait(2000);
    //click on the Add to cart Button..
    //select Product1
    cy.get(".products")
      .find(".product")
      .as("productItemLocator")
      .each((el) => {
        const name = el.find(".product-name").text();
        if (name.includes("Carrot")) {
          cy.wrap(el).contains("ADD TO CART").click();
          cy.wrap(el).find("button").click();
        }
      });
    //select Product 2
    cy.get("@productItemLocator").each((el) => {
      const name = el.find(".product-name").text();
      if (name.includes("Cashews")) {
        cy.wrap(el).contains("ADD TO CART").click();
        cy.wrap(el).find("button").click();
      }
    });

    cy.get(".cart-icon").click();

    cy.get(".cart-preview").find("button").click();
    cy.contains("Place").click();
  });
});
