import { bootstrapModalsPage } from "../../support/pages/index";

const bootstrapModals = new bootstrapModalsPage();

describe("Bootstrap Modals", () => {
  beforeEach(() => {
    bootstrapModals.accessDemoPage();
    cy.contains('Input Forms').click();
  });

  it("Opens and interacts with Single Modal example", () => {
    bootstrapModals.accessDemoPage();
    bootstrapModals.accessSingleModalExamples();
    cy.contains('Modal Title').should('be.visible');
    bootstrapModals.clickFirstSaveChangesButton();
    
  });

  it("Opens and handles Multiple Modal example", () => {
    bootstrapModals.accessDemoPage();
    bootstrapModals.accessMultipleModalExample();
    bootstrapModals.getFirstLaunchModalButton();
    bootstrapModals.firstModalContent();
    bootstrapModals.getSecondLaunchModalButton();
    bootstrapModals.secondModalContent();
    bootstrapModals.clickSecondSaveChangesButton();
  });

})