const { isMainThread } = require("worker_threads");

///<reference types = "cypress"/>

describe("Home page tests", () => {
  it("logs in correctly", () => {
      cy.visit("https://demoblaze.com/")
  });
});
