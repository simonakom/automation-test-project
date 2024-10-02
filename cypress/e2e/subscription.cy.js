describe('Subscription', () => {

  it('Verify subscription in home page', () => {
  cy.navigateToHomePage();
  cy.subscribeToNewsletter();
});

  it('Verify subscription in cart page', () => {
  cy.navigateToHomePage();
  // Click 'Cart' button
  cy.get('a[href="/view_cart"]').first().should('contain.text', ' Cart').and('be.visible').click();
  cy.subscribeToNewsletter();
  })
})