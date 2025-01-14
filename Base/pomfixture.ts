import { test as base, expect, Page } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import ComputersPage from '../pages/computersPage';
import Checkout from '../pages/checkout';

type Pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  computersPage: ComputersPage;
  checkout: Checkout;
};

// Extend Playwright's base test
const test = base.extend<Pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  computersPage: async ({ page }, use) => {
    await use(new ComputersPage(page));
  },
  checkout: async ({ page }, use) => {
    await use(new Checkout(page));
  },
});

export { test, expect };
