// step_definitions/scenario3_common_AddRingBlink_products.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { AllProductsPage } = require('../pages/AllProductsPage');

Given('I am on the Amazon homepage with a US address', async function () {
  this.productsPage = new AllProductsPage(this.page);
});

When('I search for {string}', async function (item) {
  await this.productsPage.searchForItem(item);
});

When('I click on the {string} result', async function (productName) {
  await this.productsPage.clickProduct(productName);
});

When('I select quantity {string}', async function (qty) {
  await this.productsPage.selectQuantity(qty);
});

When('I add the item to the cart', async function () {
  await this.productsPage.addToCart();
});

Then('I validate {string} is displayed', async function (message) {
  await this.productsPage.dismissEnhancements();
  await this.productsPage.validateAddedToCart();
});
