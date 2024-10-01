let user;

it('Logout User', () => {
  cy.createUser('Roger').then((newUser) => {
    user = newUser;  
    cy.registerUserAndLogout(user);
  });
});