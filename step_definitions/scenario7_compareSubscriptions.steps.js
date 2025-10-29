// step_definitions/scenario7_compareSubscriptions.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { SubscriptionComparison } = require('../support/SubscriptionComparison');

Given('I have saved the Ring and Blink yearly prices', function () {
  // Validate that the variables were saved from previous scenarios
  expect(this.ringBasicYearlyPrice, 'Ring price was not saved').not.toBeNull();
  expect(this.blinkBasicYearlyPrice, 'Blink price was not saved').not.toBeNull();
});

When('I print both prices to the console', function () {
  // This step corresponds to step 48
  SubscriptionComparison.printPrices(this.ringBasicYearlyPrice, this.blinkBasicYearlyPrice);
});

Then('I compare the prices and print the result', function () {
  // This step corresponds to steps 49-51
  SubscriptionComparison.comparePrices(this.ringBasicYearlyPrice, this.blinkBasicYearlyPrice);
});