import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que ingreso a la pagina", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("hago clic en el boton de login", () => {
  cy.get("li a[href='/login']").click();
});

When("ingreso un usuario y contraseña validos", () => {
  cy.get("input[data-qa='login-email']").type("dev@gmail.com");
  cy.get("input[data-qa='login-password']").type("codelima09");
});

When("hago clic en el boton de inicio de sesion", () => {
  cy.get("button[data-qa='login-button']").click();
});

When("ingreso un usuario y contraseña invalidos", () => {
  cy.get("input[data-qa='login-email']").type("dev1@gmail.com");
  cy.get("input[data-qa='login-password']").type("codelima091");
});

Then("debería iniciar sesión correctamente", () => {
  cy.url().should("eq", "https://www.automationexercise.com/");

  // Verificar que se ha iniciado sesión buscando el botón de logout
  cy.get("a[href='/logout']").should("contain.text", "Logout");
});

Then("deberia de mostrar el mensaje de error", () => {
  cy.get("p[style='color: red;']").should("contain.text", "Your email or password is incorrect!");
});