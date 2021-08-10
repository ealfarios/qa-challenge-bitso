export class SignUpPage {
  getCountry() {
    return cy.findByText("Country of residence");
  }

  getEmail() {
    return cy.get('input[name="email"]');
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  getPasswordConfirmation() {
    return cy.get('input[name="password_confirmation"]');
  }

  getAcceptTerms() {
    return cy.get('input[name="accept_terms"]');
  }

  getAcceptEmail() {
    return cy.get('input[name="accept_mail"]');
  }

  getAcceptPrivacy() {
    return cy.get('input[name="accept_privacy"]');
  }

  getAcceptNvioTerms() {
    return cy.get('input[name="accept_nvio_terms"]');
  }

  getStartButton() {
    return cy.get("button").contains("Start");
  }
}
