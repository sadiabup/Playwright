import { chromium, test } from "@playwright/test"
 
test("Login test demo", async() => {
 
    const browser = await chromium.launch({
headless: false
    });
 
    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto("https://test460.nop-station.com/en/")
    await page.hover("//a[contains (text(), 'Log in')] ")
    await page.click("//a[contains (text(), 'Log in')] ")
 
    await page.fill("//input[@name='Email']" , "snake123@gmail.com")
    await page.fill("//input[@name='Password'] " , "123")
 
    await page.click("//button[@type= 'submit' and @class= 'button-1 login-button'] ");
 
    await page.waitForTimeout(5000);
 
    const newContext = await browser.newContext()
 
    const newPage = await newContext.newPage();
    await newPage.goto("https://test460.nop-station.com/en/")
 
    //await newPage.waitForTimeout(5000);
 
 
})
