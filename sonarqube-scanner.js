const scanner = require('sonarqube-scanner');
require('dotenv').config();

scanner(
  {
  serverUrl: "http://localhost:9000",
  token: process.env.REACT_APP_SONARQUBE_TOKEN,
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);