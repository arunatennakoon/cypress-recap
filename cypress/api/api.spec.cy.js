describe('API testing', () => {
    it('Returns the book when request via book id', () => {
      cy.request('GET','/api/books').then(r => {
            expect(r.status).to.equal(200);
            cy.wrap(r.body[0]).should('deep.include', {
                title: 'Harry Potter',
                id: 1
            })
      })
    })
  })