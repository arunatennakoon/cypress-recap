describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('body').should('have.text', 'Welcome to Expound Rest API');
  })
})