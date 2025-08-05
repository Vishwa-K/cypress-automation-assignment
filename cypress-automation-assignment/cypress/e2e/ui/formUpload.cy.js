
import LoginPage from '../../support/pages/loginPage';
import AutomationPage from '../../support/pages/automationPage';
import FormPage from '../../support/pages/formPage';

describe('Form Upload Task UI Automation', () => {
  const loginPage = new LoginPage();
  const automationPage = new AutomationPage();
  const formPage = new FormPage();

  before(() => {
    cy.visit('/');
    loginPage.login('username', 'password');
  });

  it('Should create and upload a file in the form successfully', () => {
    automationPage.navigateToAutomation();
    automationPage.createForm();
    formPage.addTextboxAndFileUpload();
    formPage.verifyTextboxAndUpload();
    formPage.enterTextAndUploadFile('Test input', 'sample.pdf');
    formPage.saveFormAndVerify();
  });
});
