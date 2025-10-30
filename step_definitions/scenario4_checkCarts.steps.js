// step_definitions/scenario4_checkCarts.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { CheckCartPage } = require('../pages/CheckCartPage');

Given('I have items in my cart', async function () {
  this.cartPage = new CheckCartPage(this.page);
});

When('I go to the cart', async function () {
  await this.cartPage.goToCart();
});

Then('I should see the cart details', async function () {
  await this.cartPage.validateCartPage();
});
