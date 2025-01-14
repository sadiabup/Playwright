import { test } from "@playwright/test";

test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, comment & subs");
    await page.click("id=create");

    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ]);

    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);
});

test.only("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    // পাথ আপডেট করুন, এখানে `uploadItems` ফোল্ডারের সঠিক পাথ দিন
    const applePath = "uploadItems/apple.png";
    const mangoPath = "uploadItems/mango.png";

    console.log("Apple file path:", applePath);
    console.log("Mango file path:", mangoPath);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ]);

    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);

    // ফাইল আপলোড করুন
    uploadFiles.setFiles([applePath, mangoPath]);

    await page.waitForTimeout(3000);
});
