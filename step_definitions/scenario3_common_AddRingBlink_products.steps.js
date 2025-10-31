// step_definitions/scenario3_common_AddRingBlink_products.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { AllProductsPage } = require('../pages/AllProductsPage');

Given('I am at Amazon homepage', async function () {
  // Initialize the products page for searching and adding items
  this.productsPage = new AllProductsPage(this.page);
});

When('I search for {string}', async function (item) {
  await this.productsPage.searchForItems(item);
});

And('I click on the {string} result', async function (productName) {
  await this.productsPage.clickProduct(productName);
});

And('I select quantity {string}', async function (qty) {
  await this.productsPage.selectQuantity(qty);
});

And('I click on Add to cart button', async function () {
  await this.productsPage.addToCart();
});

Then('I validate {string} is displayed', async function (message) {
  await this.productsPage.dismissEnhancements();
  await this.productsPage.validateAddedToCart();
});
