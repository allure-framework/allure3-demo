import { defineConfig } from "allure";

const chartLayout = [
  {
    type: "trend",
    dataType: "status",
    mode: "percent",
  },
  {
    type: "trend",
    dataType: "status",
    limit: 10,
  },
  {
    title: "Custom Status Trend",
    type: "trend",
    dataType: "status",
    mode: "percent",
    limit: 15,
  },
  {
    type: "trend",
    dataType: "status",
    limit: 15,
    metadata: {
      executionIdAccessor: (executionOrder) => `build-${executionOrder}`,
      executionNameAccessor: (executionOrder) => `build #${executionOrder}`,
    },
  },
  {
    type: "trend",
    dataType: "severity",
    limit: 15,
  },
  {
    type: "pie",
  },
  {
    type: "pie",
    title: "Custom Pie",
  },
];

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
        charts: chartLayout,
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
        charts: chartLayout,
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
        charts: chartLayout,
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
        charts: chartLayout,
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
        layout: chartLayout,
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
        fileName: "report.csv"
      }
    }
  },
  environments: {
    chromium: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "env" && value === "chromium"),
    },
    firefox: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "env" && value === "firefox"),
    },
    safari: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "env" && value === "webkit"),
    },
    node: {
      matcher: ({ labels }) => labels.find(({ name, value }) => name === "env" && value === "node"),
    }
  },
});
