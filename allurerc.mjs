import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure 3 demo report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    awesomeAll: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Allure Awesome: all test",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        filter: ({ labels }) => !labels.find(({ name, value }) => name === "language" && value === "java"),
      },
    },
    awesomeE2E: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Allure Awesome: E2E tests",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "framework" && value === "playwright"),
      },
    },
    awesomeUnit: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Allure Awesome: unit tests",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "framework" && value === "vitest"),
      },
    },
    awesomeBDD: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Allure Awesome: BDD",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        groupBy: ["epic", "feature", "story"],
        filter: ({ labels }) => !labels.find(({ name, value }) => name === "language" && value === "java"),
      },
    },
    awesomeAllure2: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Allure Awesome: allure 2 demo data",
        singleFile: false,
        reportLanguage: "en",
        open: false,
        filter: ({ labels }) => labels.find(({ name, value }) => name === "language" && value === "java"),
      },
    },
    dashboard: {
      options: {
        singleFile: false,
        reportName: "Dashboard",
        reportLanguage: "en",
      },
    },
    allure2: {
      options: {
        reportName: "Allure 2",
        singleFile: false,
        reportLanguage: "en",
      },
    },
    classic: {
      options: {
        reportName: "Allure Classic",
        singleFile: false,
        reportLanguage: "en",
      },
    },
    log: {
      options: {
        groupBy: "none",
      },
    },
    csv: {
      options: {
        fileName: "report.csv",
      },
    },
  },
});
