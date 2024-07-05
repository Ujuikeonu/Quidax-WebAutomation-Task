export class BootstrapAlertsPage {
    alertsAndModalsDropdown=()=>cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals');
    selectBootstrapAlert=()=>cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Alerts');
    getAutoCloseableSuccessMessageButton=()=>cy.get('#autoclosable-btn-success');
    showAutoCloseableSuccessOutput=()=>cy.get('.alert-autocloseable-success').contains("I'm an autocloseable success message. I will hide in 5 seconds.");
    getNormalSuccessMessageButton=()=>cy.get('#normal-btn-success');
    showNormalSuccessOutput=()=>cy.get('.alert-normal-success').contains("I'm a normal success message. To close use the appropriate button.");
    getAutoCloseableWarningMessageButton=()=>cy.get('#autoclosable-btn-warning');
    showAutoCloseableWarningOutput=()=>cy.get('.alert-autocloseable-warning').contains("I'm an autocloseable warning message. I will hide in 3 seconds.");
    getNormalWarningMessageButton=()=>cy.get('#normal-btn-warning');
    showNormalWarningOutput=()=>cy.get('.alert-normal-warning').contains("I'm a normal warning message. To close use the appropriate button.");
    getAutoCloseableDangerMessageButton=()=>cy.get('#autoclosable-btn-danger');
    showAutoCloseableDangerOutput=()=>cy.get('.alert-autocloseable-danger').contains("I'm an autocloseable danger message. I will hide in 5 seconds.");
    getNormalDangerMessageButton=()=>cy.get('#normal-btn-danger');
    showNormalDangerOutput=()=>cy.get('.alert-normal-danger').contains("I'm a normal danger message. To close use the appropriate button.");
    getAutoCloseableInfoMessageButton=()=>cy.get('#autoclosable-btn-info');
    showAutoCloseableInfoOutput=()=>cy.get('.alert-autocloseable-info').contains("I'm an autocloseable info message. I will hide in 6 seconds.");
    getNormalInfoMessageButton=()=>cy.get('#normal-btn-info');
    showNormalInfoOutput=()=>cy.get('.alert-normal-info').contains("I'm a normal info message. To close use the appropriate button.");

    accessDemoPage(){
        cy.visit("https://demo.seleniumeasy.com/");
        cy.contains('Selenium Easy').click();
      }
    alertAutoCloseableSuccessMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getAutoCloseableSuccessMessageButton().click();
        this.showAutoCloseableSuccessOutput().should('be.visible');
    }
    alertNormalSuccessMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getNormalSuccessMessageButton().click({force:true});
        this.showNormalSuccessOutput().should('be.visible');
    }
    alertAutoCloseableWarningMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getAutoCloseableWarningMessageButton().click();
        this.showAutoCloseableWarningOutput().should('be.visible');
    }
    alertNormalWarningMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getNormalWarningMessageButton().click();
        this.showNormalWarningOutput().should('be.visible');
    }
    alertAutoCloseableDangerMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getAutoCloseableDangerMessageButton().click();
        this.showAutoCloseableDangerOutput().should('be.visible');
    }
    alertNormalDangerMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getNormalDangerMessageButton().click();
        this.showNormalDangerOutput().should('be.visible');
    }
    alertAutoCloseableInfoMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getAutoCloseableInfoMessageButton().click();
        this.showAutoCloseableInfoOutput().should('be.visible');
    }
    alertNormalInfoMessage(){
        this.alertsAndModalsDropdown().click();
        this.selectBootstrapAlert().click();
        this.getNormalInfoMessageButton().click();
        this.showNormalInfoOutput().should('be.visible');
    }
  }
  