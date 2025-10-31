// step_definitions/scenario4_checkCarts.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { CheckCartPage } = require('../pages/CheckCartPage');

Given('I have items in my cart', async function () {
  this.cartPage = new checkCartItemCount(this.page);
});

When('I go to the cart', async function () {
  await this.cartPage.goToCart();
});

And('I should see the "Ring Video Doorbell Pro 2" in the cart', async function () {
  await this.cartPage.validateCartItems("Ring Video Doorbell Pro 2");
});

And('I should see the "Ring Chime" in the cart', async function () {
  await this.cartPage.validateCartItems("Ring Chime");
});

And('I should see the "Blink Video Doorbell + Mini 2 Motion & chime alerts" in the cart', async function () {
  await this.cartPage.validateCartItems("Blink Video Doorbell + Mini 2 Motion & chime alerts");
});

Then('I should see the cart details', async function () {
  await this.cartPage.validateCartPage();
});
