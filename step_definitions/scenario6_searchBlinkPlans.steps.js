// step_definitions/scenario6_searchBlinkPlans.steps.js
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { BlinkPlansPage } = require('../pages/BlinkPlansPage');

When('I navigate to the {string}', async function (urlKey) {
  if (urlKey === 'Blink URL') {
    this.blinkPlansPage = new BlinkPlansPage(this.page);
    await this.blinkPlansPage.navigate();
  }
});

When('I find the {string} text', async function (text) {
  if (text === 'Plan: Blink Basic') {
    await this.blinkPlansPage.findPlanText();
  } else if (text === 'Yearly') {
    await this.blinkPlansPage.findYearlyText();
  }
});

Then('I get the {string} and save it', async function (variableName) {
  if (variableName === 'Blink basic yearly price') {
    const price = await this.blinkPlansPage.getBasicYearlyPrice();
    this.blinkBasicYearlyPrice = price;
    expect(this.blinkBasicYearlyPrice).not.toBeNull();
  }
});