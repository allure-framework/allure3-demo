import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test/e2e",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "safari",
      use: { ...devices["Desktop Safari"] },
    }
  ],
  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        resultsDir: "./allure-results",
        globalLabels: [
          { name: "module", value: "e2e" },
        ],
      },
    ],
  ],
  use: {
    trace: "on",
    screenshot: "only-on-failure",
    baseURL: "https://allurereport.org",
  },
});
