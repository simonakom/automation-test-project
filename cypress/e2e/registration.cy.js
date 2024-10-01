
describe('Successful registration', () => {
  let signupEmail;

  beforeEach(() => {
    signupEmail = `user_${Date.now()}@example.com`;
    cy.visit('https://www.automationexercise.com/');
  });

  it('Register user successfully', () => {
    const signupName = 'John Doe';
    const signupPassword = 'SecurePassword123';
    const birthDay = '15'; 
    const birthMonth = '12'; 
    const birthYear = '1990';
    const firstName = 'John';
    const lastName = 'Doe';
    const company = 'Example Co.';
    const address1 = '123 Example St.';
    const address2 = 'Apt 4B';
    const country = 'United States'; 
    const state = 'California';
    const city = 'Los Angeles';
    const zipcode = '90001';
    const mobileNumber = '1234567890';

    // Verify that home page is visible successfully
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.get('h1').should('contain.text', 'Automation').and('contain.text', 'Exercise').and('be.visible');
    // Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
    // Verify 'New User Signup!' is visible
    cy.get('h2').should('contain.text', 'New User Signup!').and('be.visible');
    // Enter name and email address
    cy.get('input[data-qa="signup-name"]').type(signupName).should('have.value', signupName).and('be.visible');
    cy.get('input[data-qa="signup-email"]').type(signupEmail).should('have.value', signupEmail).and('be.visible');
    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').should('contain.text', 'Signup').and('be.visible').click();
    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('h2.title').should('contain.text', 'Enter Account Information').and('be.visible');
    // Fill details: Title, Name, Email, Password, Date of birth 
    cy.get('input[type="radio"][value="Mr"]').check().should('be.checked').and('be.visible'); 
    cy.get('input[data-qa="password"]').type(signupPassword).should('have.value', signupPassword).and('be.visible');
    cy.get('select[data-qa="days"]').select(birthDay).should('have.value', birthDay).and('be.visible');
    cy.get('select[data-qa="months"]').select(birthMonth).should('have.value', birthMonth).and('be.visible');
    cy.get('select[data-qa="years"]').select(birthYear).should('have.value', birthYear).and('be.visible');
    // Select checkbox 'Sign up for our newsletter!'
    cy.get('input[type="checkbox"]#newsletter').check().should('be.checked').and('be.visible'); 
    // Select checkbox 'Receive special offers from our partners!'
    cy.get('input[type="checkbox"]#optin').check().should('be.checked').and('be.visible'); 
    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('input[data-qa="first_name"]').type(firstName).should('have.value', firstName).and('be.visible');
    cy.get('input[data-qa="last_name"]').type(lastName).should('have.value', lastName).and('be.visible');
    cy.get('input[data-qa="company"]').type(company).should('have.value', company).and('be.visible');
    cy.get('input[data-qa="address"]').type(address1).should('have.value', address1).and('be.visible');
    cy.get('input[data-qa="address2"]').type(address2).should('have.value', address2).and('be.visible');
    cy.get('select[data-qa="country"]').select(country).should('have.value', country).and('be.visible'); 
    cy.get('input[data-qa="state"]').type(state).should('have.value', state).and('be.visible'); 
    cy.get('input[data-qa="city"]').type(city).should('have.value', city).and('be.visible'); 
    cy.get('input[data-qa="zipcode"]').type(zipcode).should('have.value', zipcode).and('be.visible'); 
    cy.get('input[data-qa="mobile_number"]').type(mobileNumber).should('have.value', mobileNumber).and('be.visible'); 
    // Click 'Create Account button'
    cy.get('button[data-qa="create-account"]').should('contain.text', 'Create Account').and('be.visible').click();
    // Verify that 'ACCOUNT CREATED!' is visible
    cy.get('h2.title').should('contain.text', 'Account Created!').and('be.visible');
    // Click 'Continue' button
    cy.get('a[data-qa="continue-button"]').should('contain.text', 'Continue').and('be.visible').click();
    // Verify that 'Logged in as username' is visible
    cy.get('.shop-menu .nav li').should('contain.text', 'Logged in as').and('be.visible');
    // Click 'Delete Account' button
    cy.get('a[href="/delete_account"]').should('contain.text', 'Delete Account').and('be.visible').click();
    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('h2.title').should('contain.text', 'Account Deleted!').and('be.visible');
  })
});

describe('Failed registration', () => {
  let newUser;

  beforeEach(() => {
    const timestamp = Date.now();
    newUser = {
      name: `Roger_${timestamp}`,
      email: `roger_${timestamp}@example.com`, 
      password: 'SecurePassword123',
      birthDay: '15',
      birthMonth: '12',
      birthYear: '1990',
      firstName: `Roger_${timestamp}`,
      lastName: 'Doe',
      company: 'Example Co.',
      address1: '123 Example St.',
      address2: 'Apt 4B',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobileNumber: '1234567890'
    };
    cy.registerUserAndLogout(newUser);
  });

  it('Register user with existing email', () => {
    // Verify that home page is visible successfully
    cy.visit('https://www.automationexercise.com/');
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.get('h1').should('contain.text', 'Automation').and('contain.text', 'Exercise').and('be.visible');
    // Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login').and('be.visible').click();
    // Verify 'New User Signup!' is visible
    cy.get('h2').should('contain.text', 'New User Signup!').and('be.visible');
    // Enter name and already registered email address
    cy.get('input[data-qa="signup-name"]').type(newUser.name).should('have.value', newUser.name).and('be.visible');
    cy.get('input[data-qa="signup-email"]').type(newUser.email).should('have.value', newUser.email).and('be.visible');
    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').should('contain.text', 'Signup').and('be.visible').click();
    // Verify error 'Email Address already exist!' is visible
    cy.get('p').should('contain.text', 'Email Address already exist!').and('be.visible');
  })
});

