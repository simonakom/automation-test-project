let user;
it('Logout user', () => {
  cy.createUser('Adam').then((newUser) => {
    user = newUser; //newuser: value returned by the cy.createUser() command.
    cy.registerUser(user);
    cy.logout();
    
    // Navigate to url & verify that home page is visible successfully
    cy.navigateToHomePage();
    // Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
    // Verify 'Login to your account' is visible
    cy.get('.login-form h2').should('contain.text', 'Login to your account').and('be.visible');
    // Enter correct email address and password
    cy.get('input[data-qa="login-email"]').type(user.email).should('have.value', user.email).and('be.visible');
    cy.get('input[data-qa="login-password"]').type(user.password).should('have.value', user.password).and('be.visible');
    // Click 'login' button
    cy.get('button[data-qa="login-button"]').should('contain.text', 'Login').and('be.visible').click();
    // Verify that 'Logged in as username' is visible
    cy.get('.shop-menu .nav li:contains("Logged in as")').should('contain.text', `Logged in as ${user.firstName}`).and('be.visible');
    cy.logout();
  });
});