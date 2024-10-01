// Add the custom command to generate a random email
Cypress.Commands.add('getRandomEmail', () => {
    const randomStr = Math.random().toString(36).substring(2, 15); // Generate a random string
    const randomEmail = `user_${randomStr}@example.com`; // Concatenate the random string to form an email
    return randomEmail;
  });