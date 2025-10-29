// step_definitions/scenario3_addRingChimes.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');
const { ProductPage } = require('../pages/ProductPage');

Given('I am on the Amazon homepage', async function () {
  // This step is mainly for context and to initialize pages
  this.homePage = new HomePage(this.page);
  this.searchResultsPage = new SearchResultsPage(this.page);
  this.productPage = new ProductPage(this.page);
  // We assume we are on the homepage or a product page, search is available.
});

// 'When I search for {string}' step is reused from scenario 2
// 'When I click on the {string} result' step is reused from scenario 2

When('I select quantity {string}', async function (qty) {
  await this.productPage.selectQuantity(qty);
});

// 'When I add the item to the cart' step is reused from scenario 2
// 'Then I validate {string} is displayed' step is reused from scenario 2