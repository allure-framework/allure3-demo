# Test info

- Name: python >> "pytest"
- Location: /home/runner/work/allure3-demo/allure3-demo/test/e2e/start.test.ts:127:5

# Error details

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
    at StartPage.checkTestDataSets (/home/runner/work/allure3-demo/allure3-demo/test/e2e/pageObjects/start.ts:126:43)
    at /home/runner/work/allure3-demo/allure3-demo/test/e2e/start.test.ts:139:7
```

# Page snapshot

```yaml
- region "We value your privacy":
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
  - link "4823 stargazers on GitHub":
    - /url: https://github.com/allure-framework/allure2/stargazers
    - text: "4823"
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
    - radio "Python" [checked]
    - img
    - paragraph: Python
    - img
  - listitem:
    - radio "TypeScript"
    - img
    - paragraph: TypeScript
- text: "2"
- heading "Framework" [level=2]
- paragraph: Choose a testing framework compatible with your chosen language
- list:
  - listitem:
    - radio "Behave"
    - img
    - paragraph: Behave
  - listitem:
    - radio "pytest" [checked]
    - img
    - paragraph: pytest
    - img
  - listitem:
    - radio "Pytest-BDD"
    - img
    - paragraph: Pytest-BDD
  - listitem:
    - radio "Robot Framework"
    - img
    - paragraph: Robot Framework
- text: "3"
- heading "Project metadata" [level=2]
- paragraph: Customize your project or leave it as is
- paragraph: Project name*
- textbox "Project name*": examples.allure-pytest
- paragraph: Package name*
- textbox "Package name*": examples_allure_pytest
- paragraph: Dependency management tool
- list:
  - listitem:
    - radio "Dependency management tool pip pip-tools Pipenv poetry pdm"
    - img
    - text: pip
  - listitem:
    - radio "pip-tools"
    - text: pip-tools
  - listitem:
    - radio "Pipenv" [checked]
    - img
    - text: Pipenv
  - listitem:
    - radio "poetry"
    - img
    - text: poetry
  - listitem:
    - radio "pdm"
    - img
    - text: pdm
- paragraph: Python version
- list:
  - listitem:
    - radio "Python version py3.8 py3.12" [checked]
    - text: py3.8
  - listitem:
    - radio "py3.12"
    - text: py3.12
- text: "4"
- heading "Generate" [level=2]
- paragraph: Download archive and start using the project
- button "Download .zip"
- link "Write feedback":
  - /url: https://github.com/orgs/allure-framework/discussions/categories/start
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
   26 |   if (normalizedArrays.length === 0) {
   27 |     return [];
   28 |   }
   29 |
   30 |   if (normalizedArrays.length === 1) {
   31 |     return normalizedArrays[0].map((item) => [item]);
   32 |   }
   33 |
   34 |   const generateCombination = (current: T[], index: number) => {
   35 |     if (index === normalizedArrays.length) {
   36 |       result.push(current);
   37 |       return;
   38 |     }
   39 |
   40 |     for (const item of normalizedArrays[index]) {
   41 |       generateCombination([...current, item], index + 1);
   42 |     }
   43 |   };
   44 |
   45 |   generateCombination([], 0);
   46 |
   47 |   return result;
   48 | };
   49 |
   50 | export class StartPage extends PageObject {
   51 |   constructor(props) {
   52 |     super(props);
   53 |   }
   54 |
   55 |   async getTestDataSets(page: Page) {
   56 |     const metadataSections = await page.locator('[title="Project metadata"] label[id]').all();
   57 |     const metadataOptions: (SelectOptionDescriptor | InlinePickerOptionDescriptor)[][] = [];
   58 |
   59 |     for (const metadataSection of metadataSections) {
   60 |       const metadataSelects = await metadataSection.locator("[data-testid=app-start-select]").all();
   61 |       const metadataInlinePickers = await metadataSection.locator("[data-testid=app-start-inline-picker]").all();
   62 |
   63 |       if (metadataSelects.length === 0 && metadataInlinePickers.length === 0) {
   64 |         continue;
   65 |       }
   66 |
   67 |       const metadataSelectsOptions: SelectOptionDescriptor[][] = await Promise.all(
   68 |         metadataSelects.map(async (metadataSelect) => {
   69 |           const selectId = (await metadataSelect.getAttribute("id")) ?? "";
   70 |           const options = await metadataSelect.locator("option").all();
   71 |
   72 |           return Promise.all(
   73 |             options.map(async (option) => {
   74 |               const text = (await option.textContent()) ?? "";
   75 |
   76 |               return {
   77 |                 type: OptionDescriptorType.Select,
   78 |                 selectId,
   79 |                 text,
   80 |               };
   81 |             }),
   82 |           );
   83 |         }),
   84 |       );
   85 |       const metadataInlinePickersOptions: InlinePickerOptionDescriptor[][] = await Promise.all(
   86 |         metadataInlinePickers.map(async (metadataInlinePicker) => {
   87 |           const options = await metadataInlinePicker.locator("li").all();
   88 |
   89 |           return Promise.all(
   90 |             options.map(async (option) => {
   91 |               const text = (await option.locator("label").textContent()) ?? "";
   92 |
   93 |               return {
   94 |                 type: OptionDescriptorType.InlinePicker,
   95 |                 text,
   96 |               };
   97 |             }),
   98 |           );
   99 |         }),
  100 |       );
  101 |
  102 |       metadataOptions.push(metadataSelectsOptions.flat());
  103 |       metadataOptions.push(metadataInlinePickersOptions.flat());
  104 |     }
  105 |
  106 |     return cartesianMap(metadataOptions);
  107 |   }
  108 |
  109 |
  110 |   async checkTestDataSets(payload: { dataSets: DataSet[]; framework: string }) {
  111 |     const { dataSets, framework } = payload;
  112 |
  113 |     for (const dataSet of dataSets) {
  114 |       for (const option of dataSet) {
  115 |         switch (option.type) {
  116 |           case OptionDescriptorType.Select:
  117 |             await this.page.selectOption(`#${option.selectId}`, { label: option.text });
  118 |             break;
  119 |           case OptionDescriptorType.InlinePicker:
  120 |             await this.page.getByText(option.text, { exact: true }).click({ force: true });
  121 |             break;
  122 |         }
  123 |       }
  124 |
  125 |       try {
> 126 |         const downloadPromise = this.page.waitForEvent("download");
      |                                           ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  127 |
  128 |         await this.page.getByText("Download .zip").click();
  129 |         // dirty hack because sometime download finishes before the download promise is able to be resolved
  130 |         await this.page.waitForTimeout(100);
  131 |
  132 |         await downloadPromise;
  133 |       } catch (err) {
  134 |         console.error(`Download failed for "${framework}" with options: ${dataSet.map(({ text }) => text).join(", ")}`);
  135 |
  136 |         throw err;
  137 |       }
  138 |     }
  139 |   };
  140 | }
  141 |
```