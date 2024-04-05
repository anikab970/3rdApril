import {signup} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Signup', () => {
  beforeEach(function(){
    cy.visit('https://www.konga.com/')
  })
it('should be able to signup', function (){
  cy.get(signup.signupBtn).click()
  cy.get(signup.dontHaveAnAccBtn).click()
  cy.get(signup.firstNameField).type('Qavdev')
  cy.get(signup.lastNameField).type('Limited')
  cy.get(signup.emailField).type('anifowosemariam1970@gmail.com')
  cy.get(signup.phoneNoField).type('07080703143')
  cy.get(signup.passwordField).type('199803')
  cy.get(signup.createAnAccBtn).click()

})
  })