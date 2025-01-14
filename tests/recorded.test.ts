import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('https://test460.nop-station.com/en/');
  
  // Step 2: Hover over the "Log in" link
  await page.hover("//a[contains (text(), 'Log in')]");

  // Step 3: Click on the "Log in" link
  await page.getByRole('link', { name: 'Log in' }).click();

  // Step 4: Fill in the login form
  await page.getByLabel('Email:').fill('sadia123@gmail.com');
  await page.getByLabel('Password:').fill('12345678');

  // Step 5: Click on the "Log in" button
  const loginButton = page.getByRole('button', { name: 'Log in' });
  await expect(loginButton).toBeVisible({ timeout: 15000 });
  await loginButton.click();

  // Step 6: Wait for the "My account" link to appear and click it
  const myAccountLink = page.getByRole('link', { name: 'My account' }).first(); // Target the first "My account" link
  await expect(myAccountLink).toBeVisible({ timeout: 20000 });
  await myAccountLink.click();

  // Step 7: Update the last name field
  await page.getByLabel('Last name:').fill('Sultana Meem');
  await page.getByRole('button', { name: 'Save' }).click();

  // Step 8: Perform other interactions (if any)
  await page.locator('.header-lower').click();
  await page.getByTitle('Close').click();

  // Step 9: Log out
  await page.getByRole('link', { name: 'Log out' }).click();
});

