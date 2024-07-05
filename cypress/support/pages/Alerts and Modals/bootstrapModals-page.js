export class bootstrapModalsPage {
    alertsAndModalsDropdown=()=>cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals');
    selectBootstrapModals=()=>cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals');
    singleModalExampleHeading=()=> cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-heading').contains("Single Modal Example");
    getSingleLaunchModalButton=()=>cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').contains('Launch modal');
    firstModalSaveChangesButton=()=>cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains('Save changes');
    multipleModalExampleHeading=()=>cy.get(':nth-child(3) > .col-md-4 > .panel > .panel-heading').contains('Multiple Modal Example');
    getFirstLaunchModalButton=()=>cy.get('[href="#myModal"]').contains('Launch modal');
    firstModalContent=()=>cy.get('#myModal > .modal-dialog > .modal-content > .modal-body').contains('Click launch modal button to launch second modal.');
    getSecondLaunchModalButton=()=>cy.get('.modal-body > .btn').contains('Launch modal');
    secondModalContent=()=>cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-body').contains('This is the place where the content for the modal dialog displays.');
    secondModalSaveChangesButton=()=>cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains('Save changes');

    accessDemoPage(){
        cy.visit("https://demo.seleniumeasy.com/");
        cy.contains('Selenium Easy').click();
      }
    accessSingleModalExamples(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapModals().click();
        this.singleModalExampleHeading().should('be.visible');
        this.getSingleLaunchModalButton().click();
    }

    clickFirstSaveChangesButton(){
        this.firstModalSaveChangesButton().click();  
    }

    accessMultipleModalExample(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapModals().click();
        this.multipleModalExampleHeading().should('be.visible');
        this.getFirstLaunchModalButton().click();
        this.firstModalContent().should('be.visible');
        this.getSecondLaunchModalButton().click();
    }
    
    clickSecondSaveChangesButton(){
       this.secondModalSaveChangesButton().click();
        
    }
}
  