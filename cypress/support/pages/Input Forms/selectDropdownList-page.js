export class SelectDropdownListPage {
    inputFormsDropdown=()=>cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains("Input Forms");
    selectDropdownList=()=>cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List');
    selectListDemoHeading=()=>cy.get(':nth-child(4) > .panel-heading').contains('Select List Demo');
    selectADay=()=>cy.get('#select-demo');
    selectedDayOutput=()=>cy.get('.selected-value');
    multiSelectListDemoHeading=()=>cy.get(':nth-child(5) > .panel-heading').contains('Multi Select List Demo');
    multiSelectOptions=()=>cy.get('#multi-select');
    getAllSelectedButton=()=>cy.get('#printAll').contains('Get All Selected');
    firstSelectedButton=()=>cy.get('#printMe').contains('First Selected');
    selectedOutput=()=>cy.get('.getall-selected');

    accessDemoPage(){
    cy.visit("https://demo.seleniumeasy.com/");
    cy.contains('Selenium Easy').click();
    }
  
    accessSingleSelectListDemo(){
    this.inputFormsDropdown().click();
    this.selectDropdownList().click();
    this.selectListDemoHeading().should('be.visible');
    }

    selectDay(Wednesday){
    this.selectADay().select('Wednesday');
    }

    verifySelectedDay(){
    this.selectedDayOutput().should('contain', 'Day selected :- Wednesday');
    }

    accessMultiSelectListDemo(){
    this.inputFormsDropdown().click();
    this.selectDropdownList().click();
    this.multiSelectListDemoHeading().should('be.visible');
    }

    selectMultipleOptions(){
    this.multiSelectOptions().select(['New York', 'Texas']);
    }

    clickGetAllSelectedButton(){
    this.getAllSelectedButton().click({force:true});
    }

    clickFirstSelectedButton(){
      this.firstSelectedButton().click();
    }

    verifyFirstSelectedOption(option) {
      this.selectedOutput().should('contain', "First selected option is : New York");
    }

  verifyAllSelectedOptions(options) {
    const formattedOptions = options.join(', ');
    return this.selectedOutput().should('contain', `Options selected are : New York,Texas`);

  }
 

  }
  