import { test, expect } from '../Base/pomfixture';

const email = 'sadia1@gmail.com';
const password = '12345678';

test.describe('Page object test demo', async() => {
  test('Register test_01', async ({ registerPage }) => {
    await registerPage.page.goto('https://test460.nop-station.com/en/register?returnUrl=%2Fen%2F');
    await registerPage.enterFirstName('Sadiaa');
    await registerPage.enterLastName('Sultana');
    await registerPage.enterEmail(email);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
    await registerPage.clickRegister();
  });

  test('Login test_02', async ({ loginPage }) => {
    await loginPage.page.goto('https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F');
    await loginPage.login(email, password);
  });

  test('Add to cart test_03', async ({ loginPage, homePage, computersPage }) => {
    await loginPage.page.goto('https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F');
    await loginPage.login(email, password);
    await homePage.clickOnComputersMenu();
    await computersPage.addFirstAndSecondProductsToCart();
  });

  test.only('Checkout test_04', async ({ loginPage, homePage, computersPage, checkout }) => {
    await loginPage.page.goto('https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F');
    await loginPage.login(email, password);
    await homePage.clickOnComputersMenu();
    await computersPage.addFirstAndSecondProductsToCart();
    await checkout.enterFirstName('Sadiaa');
    await checkout.enterLastName('Sultana');
    await checkout.enterEmail("");
    await checkout.enterCountryName('United States');
    await checkout.enterStateName('California');
    
    await checkout.enterCityName('Los Angeles');
    await checkout.enterAddress1('123 Main Street');
    await checkout.enterZip('90001');
    await checkout.enterPhoneNo('1234567890');
    await checkout.clickNext();
    await checkout.clickNext2();
    await checkout.clickNext3();
    await checkout.clickConfirmOrder();
    await checkout.verifyThankYouMessage();
  });
});
