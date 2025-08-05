
class FormPage {
  addTextboxAndFileUpload() {
    cy.contains('Textbox').trigger('dragstart');
    cy.get('.canvas').trigger('drop');
    cy.contains('Select File').trigger('dragstart');
    cy.get('.canvas').trigger('drop');
  }

  verifyTextboxAndUpload() {
    cy.get('.right-panel').within(() => {
      cy.get('input[type="text"]').should('exist');
      cy.get('input[type="file"]').should('exist');
    });
  }

  enterTextAndUploadFile(text, fileName) {
    cy.get('input[type="text"]').type(text);
    cy.get('input[type="file"]').selectFile(`cypress/uploads/${fileName}`);
  }

  saveFormAndVerify() {
    cy.get('button').contains('Save').click();
    cy.contains('Form saved successfully').should('be.visible');
  }
}

export default FormPage;
