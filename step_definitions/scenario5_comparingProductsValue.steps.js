// step_definitions/scenario5_comparingProductsValue.steps.js
const { Then } = require('@cucumber/cucumber');
const { CheckCartPage } = require('../pages/CheckCartPage');
const { expect } = require('@playwright/test');

Then('I compare the product prices', async function () {
  this.cartPage = new CheckCartPage(this.page);
  const { doorbell, chime } = await this.cartPage.getProductPrices();
  
  console.log(`Doorbell Price: ${doorbell}, Chime Price: ${chime}`);
  expect(doorbell).toBeGreaterThan(chime);
});
