
class LoginPage {
  login(username, password) {
    cy.get('input[name="username"]').should('be.visible').type(username);
    cy.get('input[name="password"]').should('be.visible').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
  }
}

export default LoginPage;
