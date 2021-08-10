export class WalletPage {
  getDepositButton() {
    return cy.get("button").contains("Deposit");
  }
}
