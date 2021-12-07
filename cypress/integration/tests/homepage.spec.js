/// <reference types="cypress" />

import HomePage from "../pages/home_page.js";
const home_page = new HomePage();

const { Click } = require("../utilities/UI_actions");

describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  xit("logs in correctly", () => {
    cy.url().should("eq", "https://demoblaze.com/");
  });

  xit("clicks Phones botton", () => {
    //Click(home_page.getPhones_button)
    //cy.contains("Samsung galaxy s6").should('be.visible')
    cy.get('[id="article"]').should((item) => {
      //changed from then(), since then() doesn't retry
      expect(item[0]).to.contain.text(
        "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded.  "
      );
    });   
    });

    it.only("deletes an element from cart", () => {
      cy.setCookie('tokenp_', 'ajAxMDIxNjM5MzA5')
      
      cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/addtocart",
        body: {
          cookie: 'ajAxMDIxNjM5MzA5',
          flag: true,
          id: "a8414f2e-2374-3001-a3f5-fa87f16ff218",
          prod_id: 1
        }
      });

      cy.wait(2000)

      cy.get('#cartur').click()

      cy.wait(2000)

      cy.contains('Delete').should('exist')

      cy.get('.success > :nth-child(4) > a').click()

      cy.contains('Delete').should('not.exist')
  });
});
