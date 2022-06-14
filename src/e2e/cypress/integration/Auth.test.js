describe("Uniwersytet Szczeciński", () => {
  it("Renders unauthenticated app", () => {
    cy.visit("/");
    cy.findByText(/login/i).should("exist");
  });

  it("Allows user to authenticate", () => {
    cy.visit("/");
    cy.findByText(/login/i).should("exist");
    cy.findByText(/login/i).click().type("wiktor@broders.com");
    cy.findByText(/hasło/i).click().type("Test123");
    cy.findByText(/sign in/i).click();

    cy.findByText(/logged as/i).should("exist");
  });
});
