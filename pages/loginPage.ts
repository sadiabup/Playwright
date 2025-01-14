import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async enterEmail(emailAddress: string) {
    await this.page.locator("//input[@name='Email']").type(emailAddress);
  }

  async enterPassword(password: string) {
    await this.page.locator("//input[@type='password']").type(password);
  }

  async clickLogin() {
    // Wait for navigation to complete after login
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click("//button[@type='submit' and contains(@class, 'login-button')]"),
    ]);
  }
}
