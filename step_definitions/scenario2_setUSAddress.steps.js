// step_definitions/scenario2_setUSAddress.steps.js
const { When, Then, Given } = require('@cucumber/cucumber');
const { AmHomePage } = require('../pages/AmHomePage');

Given('I am on the Amazon homepage', async function () {
  this.homePage = new AmHomePage(this.page);
  await this.homePage.navigate();
});

When('I click on Deliver to address', async function () {
  await this.homePage.clickDeliverToAddress();
});

And('I set the US zip code to {string} on choose Location popup', async function (zip) {
  await this.homePage.setUSAddress(zip);
});

Then('I click on Done to confirm', async function () {
  await this.homePage.clickDoneButton(); 
});
