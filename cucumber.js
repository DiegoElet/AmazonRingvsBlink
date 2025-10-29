// cucumber.js
module.exports = {
  default: {
    // Paths to your feature files (in execution order)
    paths: [
      'featuresTests/shopping_workflow.feature',
      'featuresTests/subscription_comparison.feature'
    ],
    // Paths to your step definitions and support files
    require: [
      'step_definitions/**/*.steps.js',
      'support/**/*.js'
    ],
    // Stop execution on first failure
    failFast: true,
    // Format options
    format: [
      'summary',
      'progress-bar',
      `json:reports/cucumber-report-${process.env.BROWSER || 'default'}.json`
    ],
    // Ensure colors are used in the terminal
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};