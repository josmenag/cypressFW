/// <reference types="cypress" />

import HomePage from "../pages/home_page.js";
const home_page = new HomePage();

import LoginPage from "../pages/login_page.js";
const login_page = new LoginPage();

const { Click,Type } = require("../utilities/UI_actions");



describe("Login tests", () => {
    beforeEach(() => {
      cy.visit("/");
      Cypress.Cookies.preserveOnce(
        'tokenp_'
    )
    });
      
    xit("logs in", () => {
      Click(home_page.getLogIn_button)
      Type(login_page.getUsername_input,"j0102")
      Type(login_page.getPassword_input,"123Queso!")
      Click(login_page.getLogIn_button)
      cy.contains('Welcome').should('be.visible')

      cy.intercept(
        {
          method: 'GET', // Route all GET requests
          path: '/login', // that have a URL that matches '/login'
        }).as('loginResponse') // and assign an alias

      cy.wait('@loginResponse').then(console.log)

    });

it("logs out", ()=>{
    cy.setCookie('tokenp_', 'ajAxMDIxNjM5MzA5')
    //cy.setCookie('user', '50f9d4f3-e037-fb47-f0f1-ec411462a980')
    //cy.setCookie('token_p', 'ajAxMDIxNjM5MzA4')
    cy.reload()


});

  });