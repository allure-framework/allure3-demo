import { defineConfig } from "allure";

const chartLayout = [
  {
    type: "pie",
    title: "Current status",
  },
  {
    type: "trend",
    dataType: "status",
    title: "Status dynamics",
  },
  {
    type: "bar",
    dataType: "statusBySeverity",
    title: "Test result severities",
  },
  {
    type: "bar",
    dataType: "statusTrend",
    title: "Status change dynamics",
  },
  {
    type: "bar",
    dataType: "statusChangeTrend",
    title: "Test base growth dynamics",
  },
  {
    type: "treemap",
    dataType: "coverageDiff",
    title: "Coverage diff map",
  },
  {
    type: "treemap",
    dataType: "successRateDistribution",
    title: "Success rate disctribution",
  },
  {
    type: "heatmap",
    title: "Problems distribution by environment",
  },
  {
    type: "bar",
    title: "Stability rate disctribution",
  },
  {
    type: "bar",
    title: "Duration by layer histogram",
  },
  {
    type: "bar", // OR it might be trend
    title: "Performance dynamics",
  },
  {
    type: "bar",
    title: "FBSU age pyramid",
  },
  {
    type: "funnel",
    title: "Testing pyramid",
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
        fileName: "report.csv",
      },
    },
  },
});
