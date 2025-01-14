import { test } from "@playwright/test";

// Test for handling dropdowns
test("handling dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    // Single select dropdown
    await page.selectOption("#select-demo", {
        label: "Tuesday" // Use only one: label, value, or index
    });
    await page.waitForTimeout(3000);

    // Multi-select dropdown
    await page.selectOption("#multi-select", [
        { label: "Texas" },
        { index: 2 },
        { value: "Washington" }
    ]);
    await page.waitForTimeout(3000);
});

// Test for handling Bootstrap dropdowns
test("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    // Function to select a country
    async function selectCountry(countryName: string) {
        await page.click("#country+span"); // Open the dropdown
        await page.locator("ul#select2-country-results")
            .locator("li", { hasText: countryName })
            .click(); // Select the country
    }

    // Select multiple countries
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
    await page.waitForTimeout(3000);
});
