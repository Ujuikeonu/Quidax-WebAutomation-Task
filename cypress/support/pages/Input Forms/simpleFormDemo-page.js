export class SimpleFormDemoPage {
    inputFormsDropdown=()=>cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains("Input Forms");
    selectSimpleFormDemo=()=>cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains("Simple Form Demo")
    singleInputFieldHeading=()=>cy.get(':nth-child(4) > .panel-heading').contains("Single Input Field");
    enterMessage=()=>cy.get('.form-group > #user-message');
    showMessageButton=()=>cy.get('#get-input > .btn').contains('Show Message');
    displayedMessage=()=>cy.get(':nth-child(4) > .panel-body > :nth-child(4)').contains('Your Message: I am a Quidaxian!');
    twoInputFieldsHeading=()=>cy.get(':nth-child(5) > .panel-heading').contains('Two Input Fields');
    valueAInput=()=>cy.get('#value1');
    valueBInput=()=>cy.get('#value2');
    getTotalButton=()=>cy.get('#gettotal > .btn').contains('Get Total');
    totalOutput=()=>cy.get('[style="height: 50px; width: 100%;"]').contains('Total a + b = 15');

    accessDemoPage(){
    cy.visit("https://demo.seleniumeasy.com/");
    cy.contains('Selenium Easy').click();
  }

    accessSingleInputField(){
    this.inputFormsDropdown().click();
    this.selectSimpleFormDemo().click();
    this.singleInputFieldHeading().should('be.visible');
  }
    enterAMessage(){
    this.enterMessage().type('I am a Quidaxian!');
    this.showMessageButton().click({force:true});
  }
    verifyDisplayedMessage(){
    this.displayedMessage().should('be.visible');
  }
    accessMultipleInputFields(){
    this.inputFormsDropdown().click();
    this.selectSimpleFormDemo().click();
    this.twoInputFieldsHeading().should('be.visible');
  }

    enterValuesAndSubmit(){
    this.valueAInput().type('5');
    this.valueBInput().type('10');
    this.getTotalButton().click({force:true});
  }
    verifyTotal(){
    this.totalOutput().should('be.visible');
  }
  }