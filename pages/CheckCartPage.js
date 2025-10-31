// pages/CheckCartPage.js
const { expect } = require('@playwright/test');

class CheckCartPage {
  constructor(page) {
    this.page = page;
    this.goToCartButton = page.locator('#nav-cart');
    this.shoppingCartTitle = page.getByRole('heading', { name: 'Shopping Cart' });
    this.saveForLaterButton = page.locator('input[value="Save for later"]');
    this.subtotalText = page.locator('#sc-subtotal-label-activecart');
    
    // Storage for validated cart items
    this.ringDoorbellName = '';
    this.ringChimeName = '';
    this.blinkDoorbellName = '';
    
    // Storage for product prices (Scenario 5)
    this.productPrices = new Map();
    this.bundleTotals = {};
  }

  async checkCartItemCount() {
    const cartCount = this.page.locator('#nav-cart-count');
    await expect(cartCount).toHaveText('3');
  }

  async goToCart() {
    await this.goToCartButton.click();
    await expect(this.shoppingCartTitle).toBeVisible();

  }

  async validateCartItems(itemName) {
    // Locate the item in the cart by its name
    const cartItem = this.page.locator(`span.a-truncate-full`).filter({ hasText: itemName });
    await expect(cartItem).toBeVisible();
    
    // Save the item name in the appropriate property based on what it is
    if (itemName.includes('Ring Video Doorbell')) {
      this.ringDoorbellName = itemName;
      console.log(`Saved Ring Doorbell: ${this.ringDoorbellName}`);
    } else if (itemName.includes('Ring Chime')) {
      this.ringChimeName = itemName;
      console.log(`Saved Ring Chime: ${this.ringChimeName}`);
    } else if (itemName.includes('Blink')) {
      this.blinkDoorbellName = itemName;
      console.log(`Saved Blink Doorbell: ${this.blinkDoorbellName}`);
    }
  }

  async validateCartPage() {
    await expect(this.saveForLaterButton.first()).toBeVisible();
    await expect(this.subtotalText).toBeVisible();
 
  }


  //Scenario 5 methods
  async saveProductPrice(productName) {
    // Find the product in the cart by name
    const productRow = this.page.locator('div[data-name]').filter({ hasText: productName });
    
    // If the above doesn't work, try alternative selector
    const fallbackRow = this.page.locator('.sc-list-item').filter({ hasText: productName });
    
    let priceLocator;
    if (await productRow.count() > 0) {
      priceLocator = productRow.locator('span.sc-product-price').first();
    } else {
      priceLocator = fallbackRow.locator('span.sc-product-price').first();
    }
    
    await expect(priceLocator).toBeVisible();
    const priceText = await priceLocator.innerText();
    const price = parseFloat(priceText.replace('$', '').replace(',', ''));
    
    this.productPrices.set(productName, price);
    console.log(`✓ Saved price for "${productName}": $${price}`);
  }

  async calculateBundleTotal(product1, product2) {
    const price1 = this.productPrices.get(product1) || 0;
    const price2 = this.productPrices.get(product2) || 0;
    const total = price1 + price2;
    
    const bundleName = `${product1} + ${product2}`;
    this.bundleTotals[bundleName] = total;
    
    console.log(`\n📦 Bundle: ${bundleName}`);
    console.log(`   ${product1}: $${price1}`);
    console.log(`   ${product2}: $${price2}`);
    console.log(`   Total: $${total.toFixed(2)}`);
  }

  printBundleTotals() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 BUNDLE PRICE COMPARISON');
    console.log('='.repeat(60));
    
    for (const [bundleName, total] of Object.entries(this.bundleTotals)) {
      console.log(`${bundleName}: $${total.toFixed(2)}`);
    }
    console.log('='.repeat(60));
  }

  highlightCheaperBundle() {
    const bundles = Object.entries(this.bundleTotals);
    
    if (bundles.length < 2) {
      console.log('⚠️  Not enough bundles to compare');
      return;
    }
    
    const [bundle1, bundle2] = bundles;
    const [name1, price1] = bundle1;
    const [name2, price2] = bundle2;
    
    console.log('\n🏆 RESULT:');
    
    if (price1 < price2) {
      const savings = price2 - price1;
      console.log(`✅ CHEAPER OPTION: ${name1}`);
      console.log(`💰 You save: $${savings.toFixed(2)}`);
    } else if (price2 < price1) {
      const savings = price1 - price2;
      console.log(`✅ CHEAPER OPTION: ${name2}`);
      console.log(`💰 You save: $${savings.toFixed(2)}`);
    } else {
      console.log(`🤝 Both bundles cost the same: $${price1.toFixed(2)}`);
    }
    
    console.log('='.repeat(60) + '\n');
  }
}

module.exports = { CheckCartPage };
