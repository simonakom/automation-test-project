describe('Successful registration', () => {
  let user;

  beforeEach(() => {
    cy.createUser('John').then((newUser) => { //newuser: value returned by the cy.createUser() command.
      user = newUser;  
    });
  });

  it('Register User', () => {
    cy.registerUser(user);
    cy.deleteAccount();
  });
});


describe('Failed registration', () => {
  let user;

  beforeEach(() => {
    cy.createUser('Roger').then((newUser) => {
      user = newUser;  
      cy.registerUserAndLogout(user);
    });
  });

  it('Register user with existing email', () => {
    cy.navigateToHomePageAndLogin();
    // Verify 'New User Signup!' is visible
    cy.get('h2').should('contain.text', 'New User Signup!').and('be.visible');
    // Enter name and already registered email address
    cy.get('input[data-qa="signup-name"]').type(user.name).should('have.value', user.name).and('be.visible');
    cy.get('input[data-qa="signup-email"]').type(user.email).should('have.value', user.email).and('be.visible');
    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').should('contain.text', 'Signup').and('be.visible').click();
    // Verify error 'Email Address already exist!' is visible
    cy.get('p').should('contain.text', 'Email Address already exist!').and('be.visible');
  })
});

