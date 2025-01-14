import { Page } from "@playwright/test";

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.locator("//input[@name='FirstName']").type(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.locator("//input[@name='LastName']").type(lastName);
  }

  async enterEmail(email: string) {
    await this.page.locator("//input[@name='Email']").type(email);
  }

  async enterCompanyName(company: string) {
    await this.page.locator("//input[@name='Company']").type(company);
  }

  // async enterDateOfBirth(dob: string) {
  //   await this.page.locator("//input[@name='DateOfBirth']").type(dob);
  // }

  async clickNewsletter() {
    await this.page.click("//input[@name='Newsletter']");
  }

  async enterPassword(password: string) {
    await this.page.locator("//input[@name='Password']").type(password);
  }

  async enterConfirmPassword(confirmPassword: string) {
    await this.page.locator("//input[@name='ConfirmPassword']").type(confirmPassword);
  }

  async clickRegister() {
    await this.page.click("//button[@type='submit' and contains(@class, 'register-next-step-button')]");
  }
}
