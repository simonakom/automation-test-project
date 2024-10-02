describe('Cart', () => {

  it('Add Products in Cart', () => {
    cy.navigateToHomePage();
    // Click 'Products' button
    cy.get('a[href="/products"]').should('contain.text', ' Products').and('be.visible').click();
    // Hover over first product and click 'Add to cart'
    cy.addProductToCart(1);
    // Click 'Continue Shopping' button
    cy.get('.btn.btn-success.close-modal').should('contain.text', 'Continue Shopping').and('be.visible').click();
    // Hover over second product and click 'Add to cart'
    cy.addProductToCart(2);
    // Click 'View Cart' button
    cy.get('u').should('contain.text', 'View Cart').and('be.visible').click();
    // Verify both products are added to Cart
    cy.get('.cart_description').should('have.length', 2).and('be.visible');
    // Verify their prices, quantity and total price
    cy.get('.cart_price').eq(0).should('contain.text', 'Rs. 500'); 
    cy.get('.cart_quantity').eq(0).should('contain.text', '1');
    cy.get('.cart_total').eq(0).should('contain.text', 'Rs. 500'); 
    cy.get('.cart_price').eq(1).should('contain.text', 'Rs. 400'); 
    cy.get('.cart_quantity').eq(1).should('contain.text', '1');
    cy.get('.cart_total').eq(1).should('contain.text', 'Rs. 400'); 
  })

  it('Remove Products From Cart', () => {
    cy.navigateToHomePage();
    // Add products to cart
    cy.addProductToCart(1);
    cy.get('.btn.btn-success.close-modal').should('be.visible').click();
    cy.addProductToCart(2);
    cy.get('.btn.btn-success.close-modal').should('be.visible').click();
    // Click 'Cart' button
    cy.get('a[href="/view_cart"]').first().should('contain.text', ' Cart').and('be.visible').click();
    // Verify that cart page is displayed
    cy.url().should('eq', 'https://www.automationexercise.com/view_cart');
    cy.get('li.active').should('contain.text', 'Shopping Cart').and('be.visible');
    cy.get('.cart_description').should('have.length', 2); 
    // Click 'X' button corresponding to particular product
    cy.get('a[data-product-id="1"]').first().click(); 
    // Verify that product is removed from the cart 
    cy.get('#product-1').should('not.exist'); 
    cy.get('.cart_description').should('have.length', 1); 
    cy.get('.cart_description').should('contain.text', 'Men Tshirt'); 
  })
})