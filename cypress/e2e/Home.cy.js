context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Check page elements', () => {
    it('should have a theme switcher', () => {
      cy.get('#theme-switcher')
        .find('span')
        .should('have.attr', 'aria-label', 'theme-switcher')

      cy.get('#theme-switcher')
        .find('span')
        .click()
        .should(() => {
          expect(localStorage.getItem('theme')).to.eq('dark')
        })
      // .should('have.text', '🌞') Currently not suported by cypress runners on CircleCI
      cy.get('html').should('have.attr', 'data-theme', 'dark')

      cy.get('#theme-switcher')
        .find('span')
        .click()
        .should(() => {
          expect(localStorage.getItem('theme')).to.eq('light')
        })
      // .should('have.text', '🌚')
      cy.get('html').should('have.attr', 'data-theme', 'light')
    })

    it('should have a header', () => {
      cy.get('.Header').find('h1').should('have.text', 'url.pet')
    })

    it('should have a form', () => {
      cy.get('#minifier-form').within(() => {
        cy.get('label#url').should('have.attr', 'for', 'url')
        cy.get('input#url').should('have.attr', 'placeholder', 'URL')
        cy.get('button#button').should('have.text', 'Minify this ☝️')
      })
    })
  })
  describe('Check form functionalities', () => {
    it('should post the URL to minify', () => {
      cy.get('#minifier-form').within(() => {
        cy.get('input#url')
          .type('https://url.pet/')
          .should('have.value', 'https://url.pet/')
      })
      cy.get('#minifier-form')
        .submit()
        .should('contain', 'The short url has been successfully created! 👌')
    })
  })
})
