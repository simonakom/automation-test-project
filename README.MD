# <span><img src="./assets/logo.png" alt=logo style="height: 2em;"></span> Automated Testing with Cypress
 
## Welcome!

This project focuses on testing different functionalities of the <a href="https://www.automationexercise.com/"> Automation Exercise Website</a> through automated tests using Cypress. Additionally, the project includes continuous integration (CI) with GitHub Actions.

Following 10 test cases were seleceted from the Automation Exercise <a href="https://www.automationexercise.com/test_cases">website</a> and implementent in this project:

- Test Case 1: Register User
- Test Case 2: Login User with correct email and password
- Test Case 3: Login User with incorrect email and password
- Test Case 4: Logout User
- Test Case 5: Register User with existing email
- Test Case 6: Contact Us Form
- Test Case 12: Add Products in Cart
- Test Case 17: Remove Products From Cart
- Test Case 10: Verify Subscription in home page
- Test Case 11: Verify Subscription in Cart page


## <span><img src="./assets/warning.png" alt=Prerequisites style="height: 1cm;"></span> Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js.
- npm (Node Package Manager): *Comes with Node.js installation.*

## <span><img src="./assets/setting.png" alt=Prerequisites style="height: 1cm;"></span> Set up 

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.

## <span><img src="./assets/rocket.png" alt=Prerequisites style="height: 1cm;"></span> Run Cypress

- To run and open 'Cypress' user interface (GUI):  `npm run test`. 
  - In Cypress UI choose E2E Testing in preffered browser and click on existing "spec" in order to run it.
- To run Cypress tests in your terminal or command line interface (CLI): `npm run test:cmd`. 

## <span><img src="./assets/cypress.png" alt=Prerequisites style="height: 1cm;"></span> Automated tests with Cypress

- Tests can be found: `cypress/e2e`
- Commands can be found: `cypress/support/commands.js`.


To maintain clean code, and proper structure, tests were split into 5 files:
- `registration.cy.js` - include test case 1 & 5
- `login.cy.js` -  include test case 2 & 3
- `logout.cy.js` - include test case 4
- `cart.cy.js` - include test case 12 & 17
- `subscription.cy.js` - include test case 10 & 11
- `contactFrom.cy.js` - include test case 6

## <span><img src="./assets/github.png" alt=Prerequisites style="height: 1cm;"></span> CI Integration with GitHub Actions

This project includes a GitHub Actions workflow that automatically runs the Cypress tests each time the main branch is updated.

### GitHub Actions Workflow
The CI process is defined in the `.github/workflows/main.yml` file.

### How to View Test Results
Test results can be viewed in the "Actions" tab of your GitHub repository. Each workflow run will show the logs of the test execution, including any failures or errors encountered during the test runs.