import { test } from "@playwright/test";
import { label, epic, feature, story } from "allure-js-commons";
import { StartPage } from "./pageObjects/index.js";

let startPage: StartPage;

test.beforeEach(async ({ page }) => {
  startPage = new StartPage(page);

  await page.goto("/start");
});

test.describe("js", () => {
  const JAVASCRIPT_FRAMEWORKS = [
    // "Jest",
    // "Jasmine",
    // "Vitest",
    // "Mocha",
    "Playwright",
    // "WebdriverIO",
    // "CucumberJS",
    // "CodeceptJs",
    // "Newman",
  ];

  for (const framework of JAVASCRIPT_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("JavaScript");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("JavaScript").click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("ts", () => {
  const TYPESCRIPT_FRAMEWORKS = [
    // "Jest",
    // "Jasmine",
    // "Vitest",
    // "Mocha",
    "Playwright",
    // "CucumberJS",
    // "CodeceptJs",
  ];

  for (const framework of TYPESCRIPT_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("TypeScript");
      await story(framework);
      await label("env", browserName);

      await page.getByText("TypeScript").click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("kotlin", () => {
  const KOTLIN_FRAMEWORKS = [
    "JUnit5",
    // "JUnit4",
    // "TestNG",
  ];

  for (const framework of KOTLIN_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("Kotlin");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("Kotlin").click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("php", () => {
  const PHP_FRAMEWORKS = ["PHPUnit"];

  for (const framework of PHP_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("PHP");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("PHP").click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("python", () => {
  const PYTHON_FRAMEWORKS = [
    // "Behave",
    "pytest",
    // "Pytest-BDD",
    // "Robot Framework",
  ];

  for (const framework of PYTHON_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("Python");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("Python").click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("java", () => {
  const JAVA_FRAMEWORKS = [
    "JUnit5",
    // "JUnit4",
    // "TestNG",
    // "CucumberJVM",
    // "Spock"
  ];

  for (const framework of JAVA_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("Java");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("Java", { exact: true }).click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});

test.describe("csharp", () => {
  const CSHARP_FRAMEWORKS = [
    "NUnit",
    // "SpecFlow",
    // "xUnit.net"
  ];

  for (const framework of CSHARP_FRAMEWORKS) {
    test(`"${framework}"`, async ({ browserName, page }) => {
      await epic("Start page");
      await feature("C#");
      await story(framework);
      await label("env", browserName);

      await page.goto("/start");
      await page.getByText("C#", { exact: true }).click({ force: true });
      await page.getByText(framework, { exact: true }).click({ force: true });

      const dataSets = await startPage.getTestDataSets(page);

      await startPage.checkTestDataSets({ dataSets, framework });
    });
  }
});
