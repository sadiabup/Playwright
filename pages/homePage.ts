import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async clickOnComputersMenu() {
    // Click on the "Computers" menu link
    await this.page.click("//a[@href='/en/computers'][1]");
  }
}
