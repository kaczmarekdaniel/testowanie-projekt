describe("Notes view", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByText(/login/i).click().type("wiktor@broders.com");
    cy.findByText(/hasło/i).click().type("Test123");
    cy.findByText(/sign in/i).click();
  });

  it("Allows to create a new note and delete it", () => {
    cy.visit("/");
    cy.findByTestId(/groupBbtn/i).click();

    cy.findAllByText("Dedrick Davis").should("exist");
    cy.findByTestId(/groupCbtn/i).click();

    cy.findAllByText("Clemens Stamm").should("exist");
    cy.findByTestId(/groupAbtn/i).click();

    cy.findAllByText("Lonnie Deckow").should("exist");
  });
});
