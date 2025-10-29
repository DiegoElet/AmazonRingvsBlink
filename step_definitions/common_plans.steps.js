// step_definitions/common_plans.steps.js
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { RingPlansPage } = require('../pages/RingPlansPage');
const { BlinkPlansPage } = require('../pages/BlinkPlansPage');

When('I navigate to the {string}', async function (urlKey) {
  if (urlKey === 'Ring URL') {
    this.ringPlansPage = new RingPlansPage(this.page);
    await this.ringPlansPage.navigate();
  } else if (urlKey === 'Blink URL') {
    this.blinkPlansPage = new BlinkPlansPage(this.page);
    await this.blinkPlansPage.navigate();
  }
});

When('I find the {string} text', async function (text) {
  if (text === 'Compare Plans') {
    await this.ringPlansPage.findComparePlans();
  } else if (text === 'Plan: Blink Basic') {
    await this.blinkPlansPage.findPlanText();
  } else if (text === 'Yearly') {
    await this.blinkPlansPage.findYearlyText();
  }
});

Then('I get the {string} and save it', async function (variableName) {
  if (variableName === 'Ring basic yearly price') {
    const price = await this.ringPlansPage.getBasicYearlyPrice();
    this.ringBasicYearlyPrice = price;
    expect(this.ringBasicYearlyPrice).not.toBeNull();
  } else if (variableName === 'Blink basic yearly price') {
    const price = await this.blinkPlansPage.getBasicYearlyPrice();
    this.blinkBasicYearlyPrice = price;
    expect(this.blinkBasicYearlyPrice).not.toBeNull();
  }
});
