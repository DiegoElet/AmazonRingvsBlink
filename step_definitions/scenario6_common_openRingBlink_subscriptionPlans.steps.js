// step_definitions/scenario6_common_openRingBlink_subscriptionPlans.steps.js
const { Given, Then } = require('@cucumber/cucumber');
const { RingPlansPage } = require('../pages/RingPlansPage');
const { BlinkPlansPage } = require('../pages/BlinkPlansPage');

// Storage for saved prices
let savedPrices = {
  ringBasicYearly: null,
  blinkBasicYearly: null
};

Given('I navigate to {string}', async function (urlType) {
  if (urlType === 'Ring URL') {
    this.ringPlansPage = new RingPlansPage(this.page);
    await this.ringPlansPage.navigate();
    console.log('✓ Navigated to Ring subscription plans page');
  } else if (urlType === 'Blink URL') {
    this.blinkPlansPage = new BlinkPlansPage(this.page);
    await this.blinkPlansPage.navigate();
    console.log('✓ Navigated to Blink subscription plans page');
  }
});

Given('I find the {string} text', async function (textToFind) {
  if (textToFind === 'Compare Plans') {
    await this.ringPlansPage.findComparePlans();
    console.log('✓ Found "Compare Plans" section');
  } else if (textToFind === 'Basic') {
    await this.ringPlansPage.findBasicPlan();
    console.log('✓ Found "Basic" plan');
  } else if (textToFind === 'Plan: Blink Basic') {
    await this.blinkPlansPage.findPlanText();
    console.log('✓ Found "Plan: Blink Basic" text');
  } else if (textToFind === 'Yearly') {
    await this.blinkPlansPage.findYearlyText();
    console.log('✓ Found "Yearly" option');
  }
});

Then('I get the {string} and save it', async function (priceType) {
  if (priceType === 'Ring basic yearly price') {
    const price = await this.ringPlansPage.getBasicYearlyPrice();
    savedPrices.ringBasicYearly = price;
    console.log(`💰 Ring Basic Yearly Price: $${price}`);
    console.log(`✓ Saved Ring basic yearly price: $${price}`);
  } else if (priceType === 'Blink basic yearly price') {
    const price = await this.blinkPlansPage.getBasicYearlyPrice();
    savedPrices.blinkBasicYearly = price;
    console.log(`💰 Blink Basic Yearly Price: $${price}`);
    console.log(`✓ Saved Blink basic yearly price: $${price}`);
    
    // Print comparison if both prices are saved
    if (savedPrices.ringBasicYearly && savedPrices.blinkBasicYearly) {
      console.log('\n' + '='.repeat(60));
      console.log('📊 SUBSCRIPTION PRICE COMPARISON');
      console.log('='.repeat(60));
      console.log(`Ring Basic (Yearly):  $${savedPrices.ringBasicYearly}/year`);
      console.log(`Blink Basic (Yearly): $${savedPrices.blinkBasicYearly}/year`);
      
      const ringPrice = parseFloat(savedPrices.ringBasicYearly);
      const blinkPrice = parseFloat(savedPrices.blinkBasicYearly);
      
      if (ringPrice < blinkPrice) {
        const savings = blinkPrice - ringPrice;
        console.log(`\n✅ CHEAPER OPTION: Ring Basic`);
        console.log(`💰 You save: $${savings.toFixed(2)}/year`);
      } else if (blinkPrice < ringPrice) {
        const savings = ringPrice - blinkPrice;
        console.log(`\n✅ CHEAPER OPTION: Blink Basic`);
        console.log(`💰 You save: $${savings.toFixed(2)}/year`);
      } else {
        console.log(`\n🤝 Both plans cost the same: $${ringPrice}/year`);
      }
      console.log('='.repeat(60) + '\n');
    }
  }
});