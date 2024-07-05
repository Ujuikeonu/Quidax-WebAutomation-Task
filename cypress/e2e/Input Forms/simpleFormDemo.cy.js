import { SimpleFormDemoPage } from "../../support/pages/index";

const simpleFormDemo = new SimpleFormDemoPage();

describe("Simple Form Demo", () => {
  beforeEach(() => {
    simpleFormDemo.accessDemoPage();
    cy.contains('Input Forms').click();
  });

  it("Displays entered message in Single Input Field", () => {
    simpleFormDemo.accessDemoPage();
    simpleFormDemo.accessSingleInputField();
    simpleFormDemo.enterAMessage();
    simpleFormDemo.verifyDisplayedMessage();
  });

  it("Displays sum of values in Multiple Input Fields", () => {
    simpleFormDemo.accessDemoPage();
    simpleFormDemo.accessMultipleInputFields();
    simpleFormDemo.enterValuesAndSubmit();
    simpleFormDemo.verifyTotal();
  });

});
