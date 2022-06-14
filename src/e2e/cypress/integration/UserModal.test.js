describe("Notes view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByText(/login/i).click().type("wiktor@broders.com");
    cy.findByText(/hasło/i).click().type("Test123");
    cy.findByText(/sign in/i).click();
  });

  it("Allows to create a new note and delete it", () => {
    cy.visit("/");
    cy.findByText(/Lonnie/i).click();

    cy.findAllByText("Lonnie Deckow").should("exist");
    cy.findAllByText("Course:").should("exist");
    cy.findAllByText("back-end mindshare").should("exist");

    cy.findByText(/Close/i).click();
  });
});
