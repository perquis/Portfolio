describe("<ScheduleMeeting />", () => {
  it("tests whether the user can open the calcom iframe.", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:3000");

    cy.get("button[data-test-id='schedule-meeting']").click();

    cy.wait(10000);
    cy.get("iframe").should("be.visible");
  });
});
