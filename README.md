# Quidax-WebAutomation-Task

## Selenium Easy Demo Test Suite

### Aim
This repository contains automated tests for the Selenium Easy demo site. The tests aim to demonstrate QA strategies, automation finesse, and familiarity with CI/CD processes. It includes GitHub Actions workflows to run these tests automatically on every push to the main or dev branches.

### Test Report

To view the detailed test report, click [View Test Report](./cypress/reports/html/index.html).

### Test Site
Visit the [Selenium Easy Demo Site](https://demo.seleniumeasy.com/).

### Task Overview

#### Task 1: Functional Testing and Defect Management
1. **Input Forms:**
   - Simple Form Demo: Single input field and multiple input fields
   - Select Dropdown List: Select List Demo and Multi Select List Demo
   
2. **Alerts and Modals:**
   - Bootstrap Alerts: Bootstrap alert messages
   - Bootstrap Modals: Single modal example and Multiple modal example

#### Task 2: Test Automation
Automated web-based tests for all positive test cases designed in Task 1 using Cypress with a page object model approach.

### Installation

Clone the repository to your local machine and navigate to the project directory:
```bash
git clone https://github.com/Ujuikeonu/Quidax-WebAutomation-Task
cd Quidax-WebAutomation-Task


##  Installing Dependencies:
npm install

##  Running the Tests
To run the tests, use the following command:
npx cypress open

This will open the Cypress Test Runner. Select the test file to run the tests interactively.

Alternatively, to run the tests in headless mode, use:
npx cypress run

## Notes
Prerequisites, Known Issues, Observations and Blockers

##Prerequisites:
Before running the tests, ensure you have the following installed:
Node.js (version 12 or higher)
npm (version 6 or higher)
Cypress (version 9.0 or higher)

Ensure stable internet connectivity during test execution. Update selectors in page object classes if encountering issues.

## Page Object Classes

**SimpleFormDemoPage**
Handles interactions with the Simple Form Demo page.

**SelectDropdownListPage**
Handles interactions with the Select Dropdown List Demo page

**BootstrapAlertsPage**
Handles interactions with the Bootstrap Alerts page.

**BootstrapModalsPage**
Handles interactions with the Bootstrap Modals page.

## Known Issues

### Issue: Dropdown Selection Verification Failing

**Description:**
The test is failing because the assertion for verifying selected options in the dropdown is not passing. The expected text is not found within the specified element, resulting in a timeout error.

**Steps to Reproduce:**
1. Navigate to the select dropdown list page.
2. Select "New York" and "Texas" from the dropdown options.
3. Run the test that verifies the selected options.

**Test Code:**
```javascript
const selectedOptions = ['New York', 'Texas'];
selectDropdownList.verifyAllSelectedOptions(selectedOptions).should('be.visible');

**Page Method:**
verifyAllSelectedOptions(options) {
   const formattedOptions = options.join(', ');
   return this.selectedOutput().should('contain', `Options selected are : New York,Texas`);
}

**Error Message:**
AssertionError
Timed out retrying after 80000ms: expected '<p.getall-selected>' to contain 'Options selected are : New York,Texas'

**Findings:**
1. Assertion Failure: The assertion fails because the expected text "Options selected are : New York,Texas" is not found within the <p.getall-selected> element.

2. Hardcoded Text: The original method contained hardcoded text, which was corrected to use the dynamic formattedOptions variable.

3. Possible Reasons:
   The selectedOutput() element might not contain the expected text.
   The element might not be updated correctly after selecting the options.
   Timing issues where the element is not updated in time for the assertion.

**Improvement Recommendations**
1. Check Element Content: Ensure the selectedOutput() element is correctly updated with the selected options.
2. Debug Element State: Add debug logs or use Cypress commands to inspect the state of the element before the assertion.
3. Adjust Timing: Ensure the dropdown selections and updates to the element are completed before the assertion is made. You might need to add a wait or retry logic.

**Simple Form Demo**
1. Clearer validation messages.
2. Inline hints for required fields.

**Select Dropdown List**
1. Improved layout for better user experience.
2. Validation for multiple selections.

**Bootstrap Alerts**
1. Consistent styling for all alert messages.
2. Better visibility of auto-closing alerts.

**Bootstrap Modals**
1. Clearer close buttons on modals.
2. More detailed information in modals.

**Observations:**
The tests assume that the structure of the demo site remains unchanged.
The tests are designed to run on a local machine with internet access.

**Blockers:**
Any changes to the HTML structure of the Selenium Easy demo site may cause the tests to fail.
Network issues or site downtime can prevent the tests from executing successfully.

##  Contacting for Issues:

Name: Uju Ikeonu
Email: ujuemaikeonu@gmail.com
GitHub: https://github.com/Ujuikeonu/
