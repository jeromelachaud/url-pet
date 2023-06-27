context('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  describe('Check page elements', () => {
    it('should have a header', () => {
      cy.get('.Header').find('h1').should('have.text', 'url.pet')
    })

    it('should have a form', () => {
      cy.get('#login-form').within(() => {
        cy.get('label#username').should('have.text', 'Enter your username')
        cy.get('label#username').should('have.attr', 'for', 'username')
        cy.get('input#username').should('have.attr', 'placeholder', 'username')
        cy.get('label#password').should('have.text', 'Enter your password')
        cy.get('label#password').should('have.attr', 'for', 'password')
        cy.get('input#password').should('have.attr', 'placeholder', 'password')
        cy.get('button#button').should('have.text', 'Let me in 🔓')
      })
    })
  })
  describe('Check form functionnalities', () => {
    it('should allow the admin to log in', () => {
      cy.get('#login-form').within(() => {
        cy.get('input#username')
          .type(`${Cypress.env('adminUsername')}`)
          .should('have.value', `${Cypress.env('adminUsername')}`)
        cy.get('input#password')
          .type(`${Cypress.env('adminPassword')}`)
          .should('have.value', `${Cypress.env('adminPassword')}`)
      })
      cy.get('#login-form')
        .submit()
        .url()
        .should('eq', `${Cypress.config('baseUrl')}/admin`)
    })
  })
})
