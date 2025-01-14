import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./pomtest", // Folder containing your test files
  testMatch: ["**/*.test.ts"], // Matches all `.test.ts` files
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
    trace: "on",
    launchOptions: {
      slowMo: 1000,
    },
  },
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "never" }],
  ],
  outputDir: "test-results", // Save screenshots/videos here
};

export default config;
