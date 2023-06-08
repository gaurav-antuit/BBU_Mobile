const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportname: "BBU_Mobile_TestExecution_Report" ,
  metadata: {
    browser: {
      name: "chrome",
      version: "114.07",
    },
    device: "Iphone SE",
    platform: {
      name: "Windows",
      version: "1",
    },
  },
  customData: {
    title: "Test Execution Status",
    data: [
      { label: "Project", value: "BBU-Mobile" },
      { label: "Release", value: "1.0.1" },
      { label: "Cycle", value: "A1" },
     
    ],
  },
});