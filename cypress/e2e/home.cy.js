describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should have a nav bar", () => {
    cy.get(".nav").should("be.visible").should("contain", "News Reader");

    cy.get("input").should("be.visible");
  });

  it("Should display articles", () => {
    cy.get(".article-container").children().should("have.length", 100);
    cy.get(".article-container")
      .children()
      .first()
      .should(
        "contain",
        "New breed of search with AI assist combines vector database and keywords"
      )
      .should(
        "contain",
        "The AI-enabled NeuralSearch from Algolia can understand the intent and context behind queries and deliver optimized results at lower cost."
      );
  });

  it("Should navigate to details page and navigate back to home", () => {
    cy.get(":nth-child(1) > :nth-child(3) > .title").click();
    cy.get(".article-container").should("not.exist");
    cy.get(".details-container").should(
      "contain",
      "VentureBeat - Sean Michael Kerner"
    );
    cy.get(".back-btn").click();
    cy.get(".article-container").should("exist");
  });
});
