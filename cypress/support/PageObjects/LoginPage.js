export class LoginPage {
  getEmail() {
    return cy.get('input[name="client_id"]');
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get("button").contains("Log in");
  }
}
