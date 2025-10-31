// step_definitions/scenario5_comparingProductsValue.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { CheckCartPage } = require('../pages/CheckCartPage');

Given('I am on the cart page', async function () {
  if (!this.cartPage) {
    this.cartPage = new CheckCartPage(this.page);
  }
  // Assuming we're already on the cart from previous scenarios
});

When('I save the price for {string}', async function (productName) {
  if (!this.cartPage) {
    this.cartPage = new CheckCartPage(this.page);
  }
  await this.cartPage.saveProductPrice(productName);
});

Given('I have saved all product prices', async function () {
  if (!this.cartPage) {
    this.cartPage = new CheckCartPage(this.page);
  }
  // Prices should already be saved from the previous scenario outline
});

When('I calculate the total for {string} and {string}', async function (product1, product2) {
  await this.cartPage.calculateBundleTotal(product1, product2);
});

Then('I print both bundle totals on console', async function () {
  this.cartPage.printBundleTotals();
});

Then('I highlight the cheaper bundle option', async function () {
  this.cartPage.highlightCheaperBundle();
});
