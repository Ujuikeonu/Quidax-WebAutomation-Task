import { SelectDropdownListPage } from "../../support/pages/index";

const selectDropdownList = new SelectDropdownListPage();

describe("Select Dropdown List", () => {
  beforeEach(() => {
    selectDropdownList.accessDemoPage();
  });

  it("Displays the Single Select List Demo", () => {
    selectDropdownList.accessSingleSelectListDemo();
    selectDropdownList.selectDay('Wednesday');
    selectDropdownList.verifySelectedDay('Wednesday');  
  });

  it("Displays the Multi Select Demo with one option", () => {
     selectDropdownList.accessMultiSelectListDemo();
     selectDropdownList.selectMultipleOptions();
     selectDropdownList.clickFirstSelectedButton();
     selectDropdownList.verifyFirstSelectedOption();
  });

  it("Displays the Multi Select Demo with multiple options", () => {
    selectDropdownList.accessMultiSelectListDemo();
    selectDropdownList.selectMultipleOptions(['New York', 'Texas']);
    selectDropdownList.clickGetAllSelectedButton();
    const selectedOptions = ['New York', 'Texas'];
    selectDropdownList.verifyAllSelectedOptions(selectedOptions).should('be.visible');
  
  });

  });



