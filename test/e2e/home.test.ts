import { expect, test } from "@playwright/test";
import { label, feature, epic, story, step } from "allure-js-commons";
import { HomePage } from "./pageObjects/index.js";

let homePage: HomePage;

test.beforeEach(async ({ browserName, page }) => {
  homePage = new HomePage(page);

  await page.goto("/");
});

test.describe("home page", () => {
  test.describe("theme toggler", () => {
    test("should allow to toggle site theme", async ({ browserName, page }) => {
      await epic("Home page");
      await feature("Theme toggler");
      await label("env", browserName);

      await step("check initial theme", async () => {
        await homePage.screenshot("Initial theme");
        await expect(page.locator("html")).not.toContainClass("dark");
      });

      await step("check theme after first toggle", async () => {
        await homePage.toggleTheme();
        await homePage.screenshot("Dark theme");
        await expect(page.locator("html")).toContainClass("dark");
      });

      await step("check theme after second toggle", async () => {
        await homePage.toggleTheme();
        await homePage.screenshot("Light theme");
        await expect(page.locator("html")).not.toContainClass("dark");
      });
    });
  });
});
