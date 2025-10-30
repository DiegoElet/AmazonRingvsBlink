// generate-report.js
const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports',
  reportPath: './reports',
  reportName: 'Execution Results',
  pageTitle: 'Amazon Ring vs Blink Test Results',
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: 'firefox & chrome',
      version: 'Latest'
    },
    device: 'Local Machine',
    platform: {
      name: 'Windows',
      version: '10/11'
    }
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'Amazon Ring vs Blink Comparison' },
      { label: 'Execution', value: 'Parallel (Firefox & Chrome)' },
      { label: 'Total Scenarios', value: '7' }
    ]
  }
});

console.log('\n✅ HTML Report generated successfully!');
console.log('📊 Open: reports/index.html\n');
