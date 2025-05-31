# Test info

- Name: php >> "PHPUnit"
- Location: /home/runner/work/allure3-demo/allure3-demo/test/e2e/start.test.ts:101:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('PHPUnit', { exact: true })

    at /home/runner/work/allure3-demo/allure3-demo/test/e2e/start.test.ts:109:56
```

# Page snapshot

```yaml
- heading "We value your privacy" [level=1]
- paragraph: We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
- button "Customize"
- button "Reject All"
- button "Accept All"
- img
- img
- text: If you like Allure Report, give it a star on
- link "GitHub":
  - /url: https://github.com/allure-framework/allure2
  - text: GitHub
  - img
- button:
  - img
- link "Skip to content":
  - /url: "#VPContent"
- banner:
  - link "Allure report logo Allure Report":
    - /url: /
    - img "Allure report logo"
    - text: Allure Report
  - button "Search": Search Ctrl K
  - navigation "Main Navigation":
    - text: Main Navigation
    - link "Modules":
      - /url: /modules/
    - link "Documentation":
      - /url: /docs/
    - link "Start":
      - /url: /start/
  - button "Change language"
  - switch "Switch to dark theme"
  - link "Star allure-framework/allure2 on GitHub":
    - /url: https://github.com/allure-framework/allure2
    - text: Star
  - link "4622 stargazers on GitHub":
    - /url: https://github.com/allure-framework/allure2/stargazers
    - text: "4622"
  - link "Get started":
    - /url: /docs/install/
- text: "1"
- heading "Language" [level=2]
- paragraph: Start your journey by selecting the programming language best suits your project needs
- list:
  - listitem:
    - radio "C#"
    - img
    - paragraph: C#
  - listitem:
    - radio "Java"
    - img
    - paragraph: Java
  - listitem:
    - radio "JavaScript"
    - img
    - paragraph: JavaScript
  - listitem:
    - radio "Kotlin"
    - img
    - paragraph: Kotlin
  - listitem:
    - radio "PHP"
    - img
    - paragraph: PHP
  - listitem:
    - radio "Python"
    - img
    - paragraph: Python
  - listitem:
    - radio "TypeScript"
    - img
    - paragraph: TypeScript
- heading "Powered by" [level=6]
- link:
  - /url: https://qameta.io/
  - img
- heading "Join our newsletter" [level=4]
- textbox "Enter your email"
- button "Subscribe"
- heading "Allure TestOps" [level=6]
- list:
  - listitem:
    - link "Overview":
      - /url: https://qameta.io/
  - listitem:
    - link "Why choose us":
      - /url: https://qameta.io/#why
  - listitem:
    - link "Cloud":
      - /url: https://qameta.io/cloud-trial-request/
  - listitem:
    - link "Self-hosted":
      - /url: https://qameta.io/server-trial-request/
  - listitem:
    - link "Success Stories":
      - /url: https://qameta.io/our-customers/
- heading "Company" [level=6]
- list:
  - listitem:
    - link "Documentation":
      - /url: /docs/
  - listitem:
    - link "Blog":
      - /url: https://qameta.io/blog/
  - listitem:
    - link "About us":
      - /url: https://qameta.io/about-us/
  - listitem:
    - link "Contact":
      - /url: mailto:allure@qameta.io
  - listitem:
    - link "Events":
      - /url: /events/
- heading "Join our community" [level=6]
- paragraph: We aim to make Allure Report as reliable and user-friendly as possible, and together with the community, we're here to help when problems arise.
- link:
  - /url: https://stackoverflow.com/questions/tagged/allure
  - img
- link:
  - /url: https://github.com/allure-framework
  - img
- link:
  - /url: https://twitter.com/qametasoftware
  - img
- text: © 2025 Qameta Software Inc. All rights reserved.
```

# Test source

```ts
   9 |
   10 |   await page.goto("/start");
   11 | });
   12 |
   13 | test.describe("js", () => {
   14 |   const JAVASCRIPT_FRAMEWORKS = [
   15 |     // "Jest",
   16 |     // "Jasmine",
   17 |     // "Vitest",
   18 |     // "Mocha",
   19 |     "Playwright",
   20 |     // "WebdriverIO",
   21 |     // "CucumberJS",
   22 |     // "CodeceptJs",
   23 |     // "Newman",
   24 |   ];
   25 |
   26 |   for (const framework of JAVASCRIPT_FRAMEWORKS) {
   27 |     test(`"${framework}"`, async ({ browserName, page }) => {
   28 |       await epic("Start page");
   29 |       await feature("JavaScript");
   30 |       await story(framework);
   31 |       await label("env", browserName);
   32 |
   33 |       await page.goto("/start");
   34 |       await page.getByText("JavaScript").click({ force: true });
   35 |       await page.getByText(framework, { exact: true }).click({ force: true });
   36 |
   37 |       const dataSets = await startPage.getTestDataSets(page);
   38 |
   39 |       await startPage.checkTestDataSets({ dataSets, framework });
   40 |     });
   41 |   }
   42 | });
   43 |
   44 | test.describe("ts", () => {
   45 |   const TYPESCRIPT_FRAMEWORKS = [
   46 |     // "Jest",
   47 |     // "Jasmine",
   48 |     // "Vitest",
   49 |     // "Mocha",
   50 |     "Playwright",
   51 |     // "CucumberJS",
   52 |     // "CodeceptJs",
   53 |   ];
   54 |
   55 |   for (const framework of TYPESCRIPT_FRAMEWORKS) {
   56 |     test(`"${framework}"`, async ({ browserName, page }) => {
   57 |       await epic("Start page");
   58 |       await feature("TypeScript");
   59 |       await story(framework);
   60 |       await label("env", browserName);
   61 |
   62 |       await page.getByText("TypeScript").click({ force: true });
   63 |       await page.getByText(framework, { exact: true }).click({ force: true });
   64 |
   65 |       const dataSets = await startPage.getTestDataSets(page);
   66 |
   67 |       await startPage.checkTestDataSets({ dataSets, framework });
   68 |     });
   69 |   }
   70 | });
   71 |
   72 | test.describe("kotlin", () => {
   73 |   const KOTLIN_FRAMEWORKS = [
   74 |     "JUnit5",
   75 |     // "JUnit4",
   76 |     // "TestNG",
   77 |   ];
   78 |
   79 |   for (const framework of KOTLIN_FRAMEWORKS) {
   80 |     test(`"${framework}"`, async ({ browserName, page }) => {
   81 |       await epic("Start page");
   82 |       await feature("Kotlin");
   83 |       await story(framework);
   84 |       await label("env", browserName);
   85 |
   86 |       await page.goto("/start");
   87 |       await page.getByText("Kotlin").click({ force: true });
   88 |       await page.getByText(framework, { exact: true }).click({ force: true });
   89 |
   90 |       const dataSets = await startPage.getTestDataSets(page);
   91 |
   92 |       await startPage.checkTestDataSets({ dataSets, framework });
   93 |     });
   94 |   }
   95 | });
   96 |
   97 | test.describe("php", () => {
   98 |   const PHP_FRAMEWORKS = ["PHPUnit"];
   99 |
  100 |   for (const framework of PHP_FRAMEWORKS) {
  101 |     test(`"${framework}"`, async ({ browserName, page }) => {
  102 |       await epic("Start page");
  103 |       await feature("PHP");
  104 |       await story(framework);
  105 |       await label("env", browserName);
  106 |
  107 |       await page.goto("/start");
  108 |       await page.getByText("PHP").click({ force: true });
> 109 |       await page.getByText(framework, { exact: true }).click({ force: true });
      |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  110 |
  111 |       const dataSets = await startPage.getTestDataSets(page);
  112 |
  113 |       await startPage.checkTestDataSets({ dataSets, framework });
  114 |     });
  115 |   }
  116 | });
  117 |
  118 | test.describe("python", () => {
  119 |   const PYTHON_FRAMEWORKS = [
  120 |     // "Behave",
  121 |     "pytest",
  122 |     // "Pytest-BDD",
  123 |     // "Robot Framework",
  124 |   ];
  125 |
  126 |   for (const framework of PYTHON_FRAMEWORKS) {
  127 |     test(`"${framework}"`, async ({ browserName, page }) => {
  128 |       await epic("Start page");
  129 |       await feature("Python");
  130 |       await story(framework);
  131 |       await label("env", browserName);
  132 |
  133 |       await page.goto("/start");
  134 |       await page.getByText("Python").click({ force: true });
  135 |       await page.getByText(framework, { exact: true }).click({ force: true });
  136 |
  137 |       const dataSets = await startPage.getTestDataSets(page);
  138 |
  139 |       await startPage.checkTestDataSets({ dataSets, framework });
  140 |     });
  141 |   }
  142 | });
  143 |
  144 | test.describe("java", () => {
  145 |   const JAVA_FRAMEWORKS = [
  146 |     "JUnit5",
  147 |     // "JUnit4",
  148 |     // "TestNG",
  149 |     // "CucumberJVM",
  150 |     // "Spock"
  151 |   ];
  152 |
  153 |   for (const framework of JAVA_FRAMEWORKS) {
  154 |     test(`"${framework}"`, async ({ browserName, page }) => {
  155 |       await epic("Start page");
  156 |       await feature("Java");
  157 |       await story(framework);
  158 |       await label("env", browserName);
  159 |
  160 |       await page.goto("/start");
  161 |       await page.getByText("Java", { exact: true }).click({ force: true });
  162 |       await page.getByText(framework, { exact: true }).click({ force: true });
  163 |
  164 |       const dataSets = await startPage.getTestDataSets(page);
  165 |
  166 |       await startPage.checkTestDataSets({ dataSets, framework });
  167 |     });
  168 |   }
  169 | });
  170 |
  171 | test.describe("csharp", () => {
  172 |   const CSHARP_FRAMEWORKS = [
  173 |     "NUnit",
  174 |     // "SpecFlow",
  175 |     // "xUnit.net"
  176 |   ];
  177 |
  178 |   for (const framework of CSHARP_FRAMEWORKS) {
  179 |     test(`"${framework}"`, async ({ browserName, page }) => {
  180 |       await epic("Start page");
  181 |       await feature("C#");
  182 |       await story(framework);
  183 |       await label("env", browserName);
  184 |
  185 |       await page.goto("/start");
  186 |       await page.getByText("C#", { exact: true }).click({ force: true });
  187 |       await page.getByText(framework, { exact: true }).click({ force: true });
  188 |
  189 |       const dataSets = await startPage.getTestDataSets(page);
  190 |
  191 |       await startPage.checkTestDataSets({ dataSets, framework });
  192 |     });
  193 |   }
  194 | });
  195 |
```