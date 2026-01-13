import { defineConfig } from "allure";
import { env } from "node:process";

const { ALLURE_SERVICE_ACCESS_TOKEN } = env;

/**
 * @type {import("allure").AllureConfig}
 */
const config = {
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
        publish: true,
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
        publish: true,
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
        publish: true,
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
        publish: true,
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
        publish: true,
      },
    },
    dashboard: {
      options: {
        singleFile: false,
        reportName: "Dashboard",
        reportLanguage: "en",
        publish: true,
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
};

if (ALLURE_SERVICE_ACCESS_TOKEN) {
  config.allureService = {
    accessToken: ALLURE_SERVICE_ACCESS_TOKEN,
  };
}

export default defineConfig(config);
