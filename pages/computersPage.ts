
import { Page } from "@playwright/test";

export default class ComputersPage {
  constructor(public page: Page) {}

  async addFirstAndSecondProductsToCart() {
    // Locate the "Add to cart" buttons
    // const desktopBtn = this.page.locator("//img[@title='Show products in category Desktops']")
    const addToCartButtons = this.page.locator("//button[contains(text(), 'Add to cart')]");

    await this.page.click("//img[@title='Show products in category Desktops']")
    // Click the first product's "Add to cart" button
    await addToCartButtons.nth(0).click();
    await this.verifyProductAdded();

    // Click the second product's "Add to cart" button
    await addToCartButtons.nth(1).click();
    await this.verifyProductAdded();

    // Close popup and proceed to cart
    const closeButton = this.page.locator("//span[@class='close' and @title='Close']");
    await closeButton.click();

    const cartIcon = this.page.locator("//a[@class='ico-cart']");
    await cartIcon.click();

    // Accept terms of service and proceed to checkout
    const termsCheckbox = this.page.locator("//input[@type='checkbox' and @name='termsofservice']");
    await termsCheckbox.check();

    const checkoutButton = this.page.locator("//button[@type='submit' and @name='checkout']");
    await checkoutButton.click();
  }

  private async verifyProductAdded() {
    const popupMessage = this.page.locator("//p[contains(text(), 'The product has been added to your')]");
    await popupMessage.waitFor({ state: "visible" });
  }
}
