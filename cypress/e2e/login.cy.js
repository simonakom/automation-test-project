describe('Successful login', () => {
  let user;

  beforeEach(() => {
    cy.createUser('Tom').then((newUser) => {
      user = newUser;
      cy.registerUser(user);
      cy.logout();
    });
  });

  it('Login user with correct email and password', () => {  
  cy.navigateToHomePage();
  // Click on 'Signup / Login' button
  cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
  // Verify 'Login to your account' is visible
  cy.get('h2').should('contain.text', 'Login to your account').and('be.visible');
  // Enter correct email address and password
  cy.get('input[data-qa="login-email"]').type(user.email).should('have.value', user.email).and('be.visible');
  cy.get('input[data-qa="login-password"]').type(user.password).should('have.value', user.password).and('be.visible');
  // Click 'login' button
  cy.get('button[data-qa="login-button"]').should('contain.text', 'Login').and('be.visible').click();
  // Verify that 'Logged in as username' is visible
  cy.get('.shop-menu .nav li:contains("Logged in as")').should('contain.text', `Logged in as ${user.firstName}`).and('be.visible');
  cy.deleteAccount();
  })
});

describe('Failed login', () => {
  let user;

  beforeEach(() => {
    cy.createUser('Mike').then((newUser) => {
      user = newUser;
      cy.registerUser(user);
      cy.logout();
    });
  });

  it('Login User with incorrect email and password', () => {
   cy.navigateToHomePageAndLogin();
   // Verify 'Login to your account' is visible
   cy.get('h2').should('contain.text', 'Login to your account').and('be.visible');
   // Enter incorrect email address and password
   cy.get('input[data-qa="login-email"]').type('incorrectEmail@gmail.com').should('have.value', 'incorrectEmail@gmail.com').and('be.visible');
   cy.get('input[data-qa="login-password"]').type('incorrectPassword').should('have.value', 'incorrectPassword').and('be.visible');
   // Click 'login' button
   cy.get('button[data-qa="login-button"]').should('contain.text', 'Login').and('be.visible').click();
   // Verify error 'Your email or password is incorrect!' is visible
   cy.get('form p').should('contain.text', 'Your email or password is incorrect!').and('be.visible');
  })
});

