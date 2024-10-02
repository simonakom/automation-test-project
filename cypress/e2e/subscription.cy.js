describe('Subscription', () => {

  it('Verify Subscription in home page', () => {
  cy.navigateToHomePage();
  cy.subscribeToNewsletter();
});

  it('Verify Subscription in Cart page', () => {
  cy.navigateToHomePage();
  // Click 'Cart' button
  cy.get('a[href="/view_cart"]').first().should('contain.text', ' Cart').and('be.visible').click();
  cy.subscribeToNewsletter();
  })
})