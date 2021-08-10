import { SignUpPage } from "../support/PageObjects/SignUpPage";
import faker from "faker";

const signUpPage = new SignUpPage();

describe("Account Sign Up", () => {
  beforeEach(() => {
    cy.visit("https://devmalta.bitso.com/register");
    cy.findByTestId("modal-close", { timeout: 9000 }).click();
  });

  it("creates account for user in Mexico", () => {
    signUpPage.getCountry().type("mex");
    cy.findByText("Mexico").click();

    signUpPage.getEmail().type(faker.internet.email());
    signUpPage.getPassword().type("Edg@r123");
    signUpPage.getPasswordConfirmation().type("Edg@r123");

    signUpPage.getAcceptTerms().check({ force: true });
    signUpPage.getAcceptEmail().check({ force: true });
    signUpPage.getAcceptPrivacy().check({ force: true });
    signUpPage.getAcceptNvioTerms().check({ force: true });

    signUpPage.getStartButton().click();

    cy.findByText("Verify your email").should("exist");
    cy.get("button").contains("Verify mail").should("exist").and("be.disabled");
  });

  it("creates account for user in Argentina", () => {
    signUpPage.getCountry().type("arg");
    cy.findByText("Argentina").click();

    signUpPage.getEmail().type(faker.internet.email());
    signUpPage.getPassword().type("Edg@r123");
    signUpPage.getPasswordConfirmation().type("Edg@r123");
    signUpPage.getAcceptTerms().check({ force: true });
    signUpPage.getAcceptEmail().check({ force: true });
    signUpPage.getAcceptPrivacy().check({ force: true });

    signUpPage.getStartButton().click();

    cy.findByText("Verify your email").should("exist");
    cy.get("button").contains("Verify mail").should("exist").and("be.disabled");
  });
});
