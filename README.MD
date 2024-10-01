# Automation Exercise Website - Automated Testing with Cypress
 
This project is about testing various functionalities of the <a href="https://www.automationexercise.com/"> Automation Exercise Website</a> using Cypress for automated tests, including continuous integration (CI) with GitHub Actions.

The test cases selected from the "Automation Exercise" website are implemented with Cypress and organized into logical test structures. The tests cover scenarios like user authentication, product searches, adding to cart, and more.


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js.
- npm (Node Package Manager): Comes with Node.js installation.

## Set up 

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.

## Run Cypress

- To run and open 'Cypress' user interface (GUI):  `npm run test`. 
  - In Cypress UI choose E2E Testing in preffered browser and choose existing "spec": `spec.cy.js`.
- To run Cypress tests in your terminal or command line interface (CLI): `npm run test:cmd`. 

## Automated tests with Cypress

- Tests can be found: `cypress/e2e/spec.cy.js` (Tests with errors are commented).
- Commands can be found: `cypress/support/commands.js`.


## CI/CD Integration with GitHub Actions

This project includes a GitHub Actions workflow that automatically runs the Cypress tests each time the main branch is updated.

### GitHub Actions Workflow
The CI/CD process is defined in the .github/workflows/main.yml file.

### How to View Test Results
Test results can be viewed in the "Actions" tab of your GitHub repository. Each workflow run will show the logs of the test execution, including any failures or errors encountered during the test runs.