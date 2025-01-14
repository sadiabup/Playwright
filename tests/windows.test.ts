import { test } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("text=Follow on Twitter") // Correct the selector by using `text=`
    ]);

    console.log(await newWindow.url());
});
