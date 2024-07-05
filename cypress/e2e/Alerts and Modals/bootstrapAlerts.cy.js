import { BootstrapAlertsPage } from "../../support/pages/index";

const bootstrapAlerts = new BootstrapAlertsPage();

describe("Bootstrap Alerts", () => {
  beforeEach(() => {
    bootstrapAlerts.accessDemoPage();
    cy.contains('Alerts & Modals').click();
  });

  it("Displays AutoCloseable success message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertAutoCloseableSuccessMessage();
    cy.contains('Bootstrap Alert messages').should('be.visible');
  });

  it("Displays Normal success message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertNormalSuccessMessage();
  });

  it("Displays AutoCloseable warning message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertAutoCloseableWarningMessage();
  });

  it("Displays Normal warning message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertNormalSuccessMessage();
  });

  it("Displays AutoCloseable danger message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertAutoCloseableDangerMessage();
    });

  it("Displays Normal danger message", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertNormalDangerMessage();
  });
  
  it("Displays AutoCloseable info message ", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertAutoCloseableInfoMessage();
  });

  it("Displays Normal info message ", () => {
    bootstrapAlerts.accessDemoPage();
    bootstrapAlerts.alertNormalInfoMessage();
  });
  
});
