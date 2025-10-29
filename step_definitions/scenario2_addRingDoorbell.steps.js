// step_definitions/scenario2_addRingDoorbell.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');
const { ProductPage } = require('../pages/ProductPage');

Given('I am on the Amazon homepage with a US address', async function () {
  // This step assumes Scenario 1 has run or address is already set.
  // We initialize pages for this scenario.
  this.homePage = new HomePage(this.page);
  this.searchResultsPage = new SearchResultsPage(this.page);
  this.productPage = new ProductPage(this.page);
});

When('I search for {string}', async function (item) {
  await this.homePage.searchForItem(item);
});

When('I click on the {string} result', async function (productName) {
  await this.searchResultsPage.clickProduct(productName);
});

When('I add the item to the cart', async function () {
  await this.productPage.addToCart();
});

Then('I validate {string} is displayed', async function (message) {
  // The 'message' param is from Gherkin, but we hard-code the logic
  await this.productPage.dismissEnhancements(); // Handles steps 20-21
  await this.productPage.validateAddedToCart(); // Handles step 22
});