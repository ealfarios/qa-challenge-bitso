export class BeneficiaryPage {
  getFirstName() {
    return cy.get('input[name="first_name"]');
  }

  getLastName() {
    return cy.get('input[name="last_name"]');
  }

  getSecondLastName() {
    return cy.get('input[name="second_last_name"]');
  }

  getBirthdayDay() {
    return cy.get("#day");
  }

  getBirthdayMonth() {
    return cy.get("#month");
  }

  getBirthdayYear() {
    return cy.get("#year");
  }

  getKinship() {
    return cy.get("#relationship").parent();
  }

  getBenefitPercentage() {
    return cy.get('input[name="percentage"]');
  }

  getAddButton() {
    return cy.get("button").contains("Add");
  }

  getConfirmKinship() {
    return cy.get(".modal-content").contains("Kinship").siblings().first();
  }

  getConfirmPercentage() {
    return cy.get(".modal-content").contains("Percentage").siblings().first();
  }

  getTransactionPin() {
    return cy.get('input[name="pin"]');
  }

  getConfirmButton() {
    return cy.get("button").contains("Confirm");
  }
}
