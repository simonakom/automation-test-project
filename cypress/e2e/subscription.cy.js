describe('Subscription', () => {

  it('Verify subscription in home page', () => {
  // Navigate to url & verify that home page is visible successfully
  cy.navigateToHomePage();
  // Subscribe pipeline
  cy.subscribeToNewsletter();
});

  it('Verify subscription in cart page', () => {
  // Navigate to url & verify that home page is visible successfully
  cy.navigateToHomePage();
  // Click 'Cart' button
  cy.get('a[href="/view_cart"]').first().should('contain.text', ' Cart').and('be.visible').click();
  // Subscribe pipeline
  cy.subscribeToNewsletter();
  })
})