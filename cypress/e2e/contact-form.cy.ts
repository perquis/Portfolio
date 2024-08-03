describe("<ContactForm />", () => {
  it("tests whether the user can send the emails when the data are correct", () => {
    cy.visit("http://localhost:3000");

    cy.viewport(1280, 720);

    cy.get("input[name='name']").click().type("John Doe");
    cy.get("input[name='email']").click().type("jdoe@gmail.com");
    cy.get("textarea[name='message']").click().type("Hello, this is a test message");
    cy.get("input[name='checked']").click();
    cy.get("button[type='submit']").click();
  });

  it("tests whether the user can send the emails when the data are incorrect", () => {
    cy.visit("http://localhost:3000");

    cy.viewport(1280, 720);

    cy.get("input[name='name']").click().type("Jo");
    cy.get("input[name='checked']").click();
    cy.get("button[type='submit']").click();
    cy.get(".text-rose-500").should("exist");
  });
});
