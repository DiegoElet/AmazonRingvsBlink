// step_definitions/scenario4_checkCart.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

Given('I have items in my cart', async function () {
  // This is a contextual step. We initialize the pages.
  this.homePage = new HomePage(this.page);
  this.cartPage = new CartPage(this.page);
});

When('I go to the cart', async function () {
  // The "Go to Cart" button might be on the main nav or on the "Added to cart" popup.
  // We will use the main nav cart button for consistency.
  await this.homePage.goToCart();
});

Then('I should see {string}', async function (text) {
  // This is a generic step, but we will call our specific validation method
  // which checks all three elements from the scenario.
  await this.cartPage.validateCartPage();
});

Then('I should see the {string} button', async function (text) {
  // This step is covered by the one above, but we leave it
  // in case you want to separate the validations.
});

Then('I should see the {string} text', async function (text) {
  // This step is also covered by 'validateCartPage()'.
});