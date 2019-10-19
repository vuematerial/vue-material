describe("Vue Material doc site", () => {
  it("should visit home page and take Applitools snapshot", () => {
    cy.visit("localhost:8080");

    cy.eyesOpen({
      appName: "Smoke Test",
      testName: "Smoke test for Vue Material",
      browser: { width: 800, height: 600 }
    });

    cy.eyesCheckWindow("Home screen");

    cy.eyesClose();
  });
});
