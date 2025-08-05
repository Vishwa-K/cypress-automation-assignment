
class AutomationPage {
  navigateToAutomation() {
    cy.get('nav').contains('Automation').click();
    cy.url().should('include', '/automation');
  }

  createTaskBot() {
    cy.get('button').contains('Create').click();
    cy.get('li').contains('Task Bot').click();
  }

  createForm() {
    cy.get('button').contains('Create').click();
    cy.get('li').contains('Form').click();
  }
}

export default AutomationPage;
