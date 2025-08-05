
import LoginPage from '../../support/pages/loginPage';
import AutomationPage from '../../support/pages/automationPage';
import MessageBoxPage from '../../support/pages/messageBoxPage';

describe('Message Box Task UI Automation', () => {
  const loginPage = new LoginPage();
  const automationPage = new AutomationPage();
  const messageBoxPage = new MessageBoxPage();

  before(() => {
    cy.visit('/');
    loginPage.login('username', 'password');
  });

  it('Should create a message box task successfully', () => {
    automationPage.navigateToAutomation();
    automationPage.createTaskBot();
    messageBoxPage.fillMandatoryDetails();
    messageBoxPage.addMessageBox();
    messageBoxPage.verifyUIElements();
    messageBoxPage.saveConfiguration();
  });
});
