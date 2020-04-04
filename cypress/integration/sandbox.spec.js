describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title().then(($title) => {
      expect($title).to.equal("Sandbox");
    });

    cy.get("h1").then(($header) => {
      const text = $header.text();
      expect(text).to.equal("Sandbox");
    });
  });
});
