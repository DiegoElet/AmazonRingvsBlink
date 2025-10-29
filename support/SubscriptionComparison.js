// support/SubscriptionComparison.js

class SubscriptionComparison {
  /**
   * Prints the two saved prices to the console.
   * @param {string} price1 - The first price (e.g., from Ring)
   * @param {string} price2 - The second price (e.g., from Blink)
   */
  static printPrices(price1, price2) {
    console.log('--- Subscription Price Report ---');
    console.log(`Value from Scenario 5 (Ring): $${price1}`);
    console.log(`Value from Scenario 6 (Blink): $${price2}`);
  }

  /**
   * Compares two prices and prints the result to the console.
   * @param {string} price1 - The first price
   * @param {string} price2 - The second price
   */
  static comparePrices(price1, price2) {
    // Convert to numbers for a reliable comparison
    const val1 = parseFloat(price1);
    const val2 = parseFloat(price2);

    if (val1 === val2) {
      console.log('Comparison Result: Subscription plans of Ring vs Blink are equal');
    } else {
      console.log('Comparison Result: Subscription plans of Ring vs Blink are different');
    }
  }
}

module.exports = { SubscriptionComparison };