// Add a new custom Cypress command to register a new user
Cypress.Commands.add('registerUserAndLogout', (user) => {
    // Navigate to the Signup/Login page
    cy.visit('https://www.automationexercise.com/');
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
    // Enter name and email address
    cy.get('input[data-qa="signup-name"]').type(user.name).should('have.value', user.name).and('be.visible');
    cy.get('input[data-qa="signup-email"]').type(user.email).should('have.value', user.email).and('be.visible');
    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').should('contain.text', 'Signup').and('be.visible').click();
    // Fill out the form details 
    cy.get('input[type="radio"][value="Mr"]').check().should('be.checked').and('be.visible');
    cy.get('input[data-qa="password"]').type(user.password).should('have.value', user.password).and('be.visible');
    cy.get('select[data-qa="days"]').select(user.birthDay).should('have.value', user.birthDay).and('be.visible');
    cy.get('select[data-qa="months"]').select(user.birthMonth).should('have.value', user.birthMonth).and('be.visible');
    cy.get('select[data-qa="years"]').select(user.birthYear).should('have.value', user.birthYear).and('be.visible');
    cy.get('input[type="checkbox"]#newsletter').check().should('be.checked').and('be.visible');
    cy.get('input[type="checkbox"]#optin').check().should('be.checked').and('be.visible');
    cy.get('input[data-qa="first_name"]').type(user.firstName).should('have.value', user.firstName).and('be.visible');
    cy.get('input[data-qa="last_name"]').type(user.lastName).should('have.value', user.lastName).and('be.visible');
    cy.get('input[data-qa="company"]').type(user.company).should('have.value', user.company).and('be.visible');
    cy.get('input[data-qa="address"]').type(user.address1).should('have.value', user.address1).and('be.visible');
    cy.get('input[data-qa="address2"]').type(user.address2).should('have.value', user.address2).and('be.visible');
    cy.get('select[data-qa="country"]').select(user.country).should('have.value', user.country).and('be.visible');
    cy.get('input[data-qa="state"]').type(user.state).should('have.value', user.state).and('be.visible');
    cy.get('input[data-qa="city"]').type(user.city).should('have.value', user.city).and('be.visible');
    cy.get('input[data-qa="zipcode"]').type(user.zipcode).should('have.value', user.zipcode).and('be.visible');
    cy.get('input[data-qa="mobile_number"]').type(user.mobileNumber).should('have.value', user.mobileNumber).and('be.visible');
    // Click 'Create Account' button
    cy.get('button[data-qa="create-account"]').should('contain.text', 'Create Account').and('be.visible').click();
    // Click 'Continue' button
    cy.get('a[data-qa="continue-button"]').should('contain.text', 'Continue').and('be.visible').click();
    // Verify that 'Logged in as username' is visible
    cy.get('.shop-menu .nav li').should('contain.text', `Logged in as ${user.firstName}`).and('be.visible');
    // Logout
    cy.get('a[href="/logout"]').should('contain.text', ' Logout').and('be.visible').click();
  });
  