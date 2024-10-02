it('Logout user', () => {
    // Navigate to url & Verify that home page is visible successfully
    cy.navigateToHomePage();
    // Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').should('contain.text', ' Contact us').and('be.visible').click();
    // Verify 'GET IN TOUCH' is visible
    cy.get('.contact-form h2').should('contain.text', 'Get In Touch').and('be.visible');
    // Enter name, email, subject and message
    cy.get('input[data-qa="name"]').type('John Doe').and('be.visible');
    cy.get('input[data-qa="email"]').type('johndoe@example.com').and('be.visible');
    cy.get('input[data-qa="subject"]').type('Testing Contact Form').and('be.visible');
    cy.get('textarea[data-qa="message"]').type('This is a test message for the contact form.').and('be.visible');
    // Upload file
    cy.get('input[type="file"]').selectFile('cypress/fixtures/cypress.png').and('be.visible');  
    // Click 'Submit' button
    cy.get('input[data-qa="submit-button"]').should('have.value', 'Submit').and('be.visible').click();
    // Click OK button
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Press OK to proceed!');
      return true; 
    });
    // Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.get('.contact-form .alert-success').should('contain.text', 'Success! Your details have been submitted successfully.').and('be.visible');
    // Click 'Home' button and verify that landed to home page successfully
    cy.get('.btn-success').should('contain.text', 'Home').and('be.visible').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}`);
  })