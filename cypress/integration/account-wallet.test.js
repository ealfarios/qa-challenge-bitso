import { userMexico, userArgentina, cryptos } from "../support/const";
import { BeneficiaryPage } from "../support/PageObjects/BeneficiaryPage";
import { WalletPage } from "../support/PageObjects/WalletPage";
import faker from "faker";

const beneficiaryPage = new BeneficiaryPage();
const walletPage = new WalletPage();

describe("Account Wallet", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://devmalta.bitso.com/api/v3/beneficiaries/**"
    ).as("beneficiaries");
    cy.intercept(
      "GET",
      "https://devmalta.bitso.com/api/v3/combined_balance*"
    ).as("balances");
  });

  context("Wallet from user in Mexico", () => {
    beforeEach(() => {
      cy.login(userMexico);
    });

    it("validates the 'Oops! something went wrong' message on all cryptos", () => {
      cy.wait("@balances");

      [{ name: "mxn", desc: "Total balance (MXN)*" }, ...cryptos].forEach(
        ({ name, desc }) => {
          cy.findByText(name).click();
          cy.findByText(desc, { timeout: 10000 }).should("be.visible");

          walletPage.getDepositButton().click();
          cy.get("h3", { timeout: 10000 }).should(
            "have.text",
            "Oops! something went wrong..."
          );

          cy.get("body").trigger("keydown", { keyCode: 27 });
          cy.wait(500);
          cy.get("body").trigger("keyup", { keyCode: 27 });
        }
      );
    });

    it("adds a beneficiary", () => {
      const beneficiary = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        secondLastName: faker.name.lastName(),
      };

      cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add");
      cy.wait("@beneficiaries");
      beneficiaryPage.getFirstName().type(beneficiary.firstName);
      beneficiaryPage.getLastName().type(beneficiary.lastName);
      beneficiaryPage.getSecondLastName().type(beneficiary.secondLastName);

      beneficiaryPage.getBirthdayDay().type("10{enter}");
      beneficiaryPage.getBirthdayMonth().type("june{enter}");
      beneficiaryPage.getBirthdayYear().type("1996{enter}");

      beneficiaryPage.getKinship().click();
      cy.findByText("Relative").click();

      beneficiaryPage.getBenefitPercentage().type("60");
      beneficiaryPage.getAddButton().click();

      beneficiaryPage
        .getConfirmBeneficiary()
        .should(
          "have.text",
          `${beneficiary.firstName} ${beneficiary.lastName} ${beneficiary.secondLastName}`
        );

      beneficiaryPage.getConfirmKinship().should("have.text", "Relative");
      beneficiaryPage.getConfirmPercentage().should("have.text", "60%");
    });
  });

  context("Wallet from user in Argentina", () => {
    beforeEach(() => {
      cy.login(userArgentina);
    });

    it("validates the 'Oops! something went wrong' message on all cryptos", () => {
      cy.wait("@balances");

      [{ name: "ars", desc: "Argentine pesos (ARS)" }, ...cryptos].forEach(
        ({ name, desc }) => {
          cy.findByText(name).click();
          cy.findByText(desc, { timeout: 10000 }).should("be.visible");

          walletPage.getDepositButton().click();
          cy.get("h3", { timeout: 10000 }).should(
            "have.text",
            "Oops! something went wrong..."
          );

          cy.get("body").trigger("keydown", { keyCode: 27 });
          cy.wait(500);
          cy.get("body").trigger("keyup", { keyCode: 27 });
        }
      );
    });

    it("adds a beneficiary", () => {
      const beneficiary = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        secondLastName: faker.name.lastName(),
      };

      cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add");
      cy.wait("@beneficiaries");
      beneficiaryPage.getFirstName().type(beneficiary.firstName);
      beneficiaryPage.getLastName().type(beneficiary.lastName);
      beneficiaryPage.getSecondLastName().type(beneficiary.secondLastName);

      beneficiaryPage.getBirthdayDay().type("10{enter}");
      beneficiaryPage.getBirthdayMonth().type("june{enter}");
      beneficiaryPage.getBirthdayYear().type("1996{enter}");

      beneficiaryPage.getKinship().click();
      cy.findByText("Relative").click();

      beneficiaryPage.getBenefitPercentage().type("60");
      beneficiaryPage.getAddButton().click();

      beneficiaryPage
        .getConfirmBeneficiary()
        .should(
          "have.text",
          `${beneficiary.firstName} ${beneficiary.lastName} ${beneficiary.secondLastName}`
        );

      beneficiaryPage.getConfirmKinship().should("have.text", "Relative");
      beneficiaryPage.getConfirmPercentage().should("have.text", "60%");
    });
  });
});
