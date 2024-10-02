// describe('Successful registration', () => {
//   let user;

//   beforeEach(() => {
//     cy.createUser('John').then((newUser) => { 
//       user = newUser; //newuser: value returned by the cy.createUser() command.
//     });
//   });

//   it('Register user', () => {
//     cy.registerUser(user);
//     cy.deleteAccount();
//   });
// });

describe('Failed registration', () => {
  let user;

  beforeEach(() => {
    cy.createUser('Roger').then((newUser) => {
      user = newUser;  
      cy.registerUser(user);
      cy.logout();
    });
  });

  it('Register user with existing email', () => {
    // Navigate to url & verify that home page is visible successfully
    cy.navigateToHomePage();
    // Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
    // Verify 'New User Signup!' is visible
    cy.get('.signup-form h2').should('contain.text', 'New User Signup!').and('be.visible');
    // Enter name and already registered email address
    cy.get('input[data-qa="signup-name"]').type(user.name).should('have.value', user.name).and('be.visible');
    cy.get('input[data-qa="signup-email"]').type(user.email).should('have.value', user.email).and('be.visible');
    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').should('contain.text', 'Signup').and('be.visible').click();
    // Verify error 'Email Address already exist!' is visible
    cy.get('.signup-form p').should('contain.text', 'Email Address already exist!').and('be.visible');
  })
});

