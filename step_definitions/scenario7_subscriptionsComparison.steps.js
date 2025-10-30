// step_definitions/scenario7_subscriptionsComparison.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { RingPlansPage } = require('../pages/RingPlansPage');
const { BlinkPlansPage } = require('../pages/BlinkPlansPage');
const { expect } = require('@playwright/test');

Given('I navigate to the Ring and Blink plan pages', async function () {
  this.ringPlansPage = new RingPlansPage(this.page);
  this.blinkPlansPage = new BlinkPlansPage(this.page);
  await this.ringPlansPage.navigate();
  await this.blinkPlansPage.navigate();
});

When('I get the subscription prices', async function () {
  this.ringPrice = await this.ringPlansPage.getBasicYearlyPrice();
  this.blinkPrice = await this.blinkPlansPage.getBasicYearlyPrice();
});

Then('I compare the subscription prices', function () {
  console.log(`Ring Price: ${this.ringPrice}, Blink Price: ${this.blinkPrice}`);
  // Add your comparison logic here
  expect(this.ringPrice).not.toBeNull();
  expect(this.blinkPrice).not.toBeNull();
});
