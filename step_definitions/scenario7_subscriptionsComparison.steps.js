// step_definitions/scenario7_subscriptionsComparison.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { RingPlansPage } = require('../pages/RingPlansPage');
const { BlinkPlansPage } = require('../pages/BlinkPlansPage');
const { expect } = require('@playwright/test');

Given('I have saved the Ring and Blink yearly prices', async function () {
  this.ringPrice = await this.ringPlansPage.getRingBasicYearlyPrice();
  this.blinkPrice = await this.blinkPlansPage.getBlinkBasicYearlyPrice();
});

When('I compare the subscription prices', function () {
  console.log(`Ring Price: ${this.ringPrice}, Blink Price: ${this.blinkPrice}`);
  
  // Method to save prices to integer variables
  this.savePricesToIntegers = function(ringPrice, blinkPrice) {
    const integer1 = parseFloat(ringPrice);
    const integer2 = parseFloat(blinkPrice);
    
    console.log(`Integer 1 (Ring Price): ${integer1}`);
    console.log(`Integer 2 (Blink Price): ${integer2}`);
    
    return { integer1, integer2 };
  };
  
  // Call the method and save the returned values
  const savedPrices = this.savePricesToIntegers(this.ringPrice, this.blinkPrice);
  this.integer1 = savedPrices.integer1;
  this.integer2 = savedPrices.integer2;

});

And('I print on console both plan prices comparison results', function () {
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUBSCRIPTION PRICE COMPARISON');
  console.log('='.repeat(60));
  console.log(`Ring Basic (Yearly):  $${this.integer1}/year`);
  console.log(`Blink Basic (Yearly): $${this.integer2}/year`);

  if (this.integer1 < this.integer2) {
    const savings = this.integer2 - this.integer1;
    console.log(`\n✅ CHEAPER OPTION: Ring Basic`);
    console.log(`💰 You save: $${savings.toFixed(2)}/year`);
  } else if (this.integer2 < this.integer1) {
    const savings = this.integer1 - this.integer2;
    console.log(`\n✅ CHEAPER OPTION: Blink Basic`);
    console.log(`💰 You save: $${savings.toFixed(2)}/year`);
  } else {
    console.log(`\n🤝 Both plans cost the same: $${this.integer1}/year`);
  }
  console.log('='.repeat(60) + '\n');
});

Then('I highlight the cheaper plan option', function () {
  if (this.integer1 < this.integer2) {
    console.log('Highlighting Ring Basic plan as the cheaper option.');
  } else if (this.integer2 < this.integer1) {
    console.log('Highlighting Blink Basic plan as the cheaper option.');
  } else {
    console.log('Both plans are equally priced.');
  }
});
