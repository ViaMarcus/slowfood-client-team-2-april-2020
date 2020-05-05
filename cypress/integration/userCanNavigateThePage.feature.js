describe("User can navigate the page", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can go to about page', () => {
    cy.get('button#about').click()
    cy.get('#content').contains('About us')
  })

  it('can go to menu', () => {
    cy.get('button#menu').click()
    cy.get('div#menu').exists()
  })

  it('can go to login page', () => {
    cy.get('button#login').click()
    cy.get('#content').contains('Log In')
  })

  it('can go to sign-up page', () => {
    cy.get('button#signup').click()
    cy.get('#content').contains('Sign Up')
  })

  it('can go to checkout page', () => {
    cy.get('button#checkout').click()
    cy.get('#content').contains('Checkout')
  })
})