
class MessageBoxPage {
  fillMandatoryDetails() {
    cy.get('input[name="taskName"]').type('Auto Message Box Task');
    cy.get('textarea[name="description"]').type('Automated description');
    cy.get('button').contains('Create').click();
  }

  addMessageBox() {
    cy.get('input[placeholder="Search Actions"]').type('Message Box');
    cy.contains('Message Box').dblclick();
  }

  verifyUIElements() {
    cy.get('.right-panel').within(() => {
      cy.get('input[name="title"]').should('be.visible');
      cy.get('textarea[name="message"]').should('be.visible');
    });
  }

  saveConfiguration() {
    cy.get('button').contains('Save').click();
    cy.contains('Configuration saved successfully').should('be.visible');
  }
}

export default MessageBoxPage;
