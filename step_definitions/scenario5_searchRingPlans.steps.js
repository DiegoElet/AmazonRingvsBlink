// step_definitions/scenario5_searchRingPlans.steps.js
const { When } = require('@cucumber/cucumber');
const { RingPlansPage } = require('../pages/RingPlansPage');

// Shared steps are in common_plans.steps.js

When('I find the {string} plan text', async function (text) {
  if (text === 'Basic') {
    await this.ringPlansPage.findBasicPlan();
  }
});