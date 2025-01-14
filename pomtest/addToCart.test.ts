import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import Computers from "../pages/computersPage";
import CheckoutPage from "../pages/checkout";

const email = "sadia1@gmail.com";
const password = "12345678";

test.describe("Page object test demo", () => {
  test("Register test_01", async ({ page }) => {
    const register = new RegisterPage(page);
    await page.goto("https://test460.nop-station.com/en/register?returnUrl=%2Fen%2F");
    await register.enterFirstName("Sadiaa");
    await register.enterLastName("Sultana");
    // await register.enterDateOfBirth("07.01.2025");
    await register.enterEmail(email);
    await register.enterCompanyName("");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    await register.clickRegister();
  });

  test("Login test_02", async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
    await login.login(email, password);
  });

  test("Add to cart test_03", async ({ page }) => {
    const login = new LoginPage(page);
    const homepage = new HomePage(page);
    const computers = new Computers(page);

    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
    await login.login(email, password);
    await homepage.clickOnComputersMenu();
    await computers.addFirstAndSecondProductsToCart();

  });

  

})