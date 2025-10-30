Welcome to Diego Frontend automation using Playwright.

To Set up your VSCode, please execute on terminal:

1-npm install

2-npm init playwright@latest

3-Navigate to Extensions view, search for "Cucumbe" and install the extension named "Cucumber (Gherkin) Full Support" (often the top result, by Alexander Krechik).

To execute all tests, please run:

4-npm run test

or

5-npm cucumber.js featuresTests/"name of each scenario".feature

//Have fun//

======----------------==============------------------
The idea of this project is to execute all 7 scenarios below following the BDD Methodology


Scenario 1 - Setting US Country

Feature: Set US Country on Amazon
  As a user, I want to set my home country to the United States.

  Scenario: Setting US country
    Given I open the Amazon homepage
    When I click on Continue shopping
    And I handle the "Visiting from Canada?" popup
    And I set the delivery country to "United States"
    Then I click on the main search bar to confirm

======----------------==============------------------


Scenario 2 - Setting US delivery Address

Feature: Set US Address on Amazon
  As a user, I want to set my delivery zip code to a US location.

  Scenario: Setting US zip code as delivery
    Given I am on the Amazon homepage
    When I click on Deliver to
    And I set the US zip code to "20212" on Choose your location popup
    Then I click on Done to confirm

======----------------==============------------------


Scenario 3 - Adding 3 different products workflow

Feature: Amazon Adding different products workflow
  As a user, I want to add different products to my Amazon cart.

  Scenario: Adding Ring Doorbell Pro 2
    Given I am at Amazon homepage
    When I search for "Ring doorbell pro 2"
    And I click on the "Video Doorbell Pro 2" result
    And I click on Add to cart button
    Then I validate "Added to cart" is displayed

  Scenario: Adding Ring Chime Pro
    Given I am at Amazon homepage
    When I search for "Ring chime Pro"
    And I click on the "Ring Chime Pro" result
    And I select quantity "2"
    And I add the item to the cart
    Then I validate "Added to cart" is displayed

  Scenario: Adding Blink Doorbell and Blink Chime
    Given I am at Amazon homepage
    When I search for "Blink Video Doorbell + Mini 2 Motion & chime alerts"
    And I click on the "Blink Video Doorbell + Mini 2 Motion & chime alerts" result
    And I click on Add to cart button
    Then I validate "Added to cart" is displayed

======----------------==============------------------


Scenario 4 - Checking all items in the Cart

Feature: Check Cart
  As a user, I want to verify if all items are in my cart.

  Scenario: Checking all items are in the Cart
    Given I have items in my cart
    When I go to the cart
    And I should see "Shopping Cart"
    And I should see the "Ring Video Doorbell Pro 2" text
    And I should see the "Ring Chime" text
    And I should see the "Blink Video Doorbell + Mini 2 Motion & chime alerts" text
    Then I should see the "Subtotal" text

======----------------==============------------------


Scenario 5 - Comparing the items price of all 3 products that were checked on Scenario4

Feature: Comparing the items price of all products that were checked on Scenario4
  As a user, I want to compare the prices of products I have checked previously.

  Scenario: Comparing products prices
    Given I have saved the prices of all checked products from Scenario4
    When I sum the prices of Ring Video Doorbell Pro 2 and Ring chime
    And I compare against the price of Blink Video Doorbell and Mini 2 Motion & chime alerts
    Then I print on console both total prices comparison results
    And I highlight the cheaper total price option

======----------------==============------------------


Scenario 6 - Searching for Ring and Blink subscription plans

Feature: Searching for Ring and Blink subscription plans
  As a user, I want to find both pages of Ring and Blink basic plans.

  Scenario: Searching Ring subscriptions plans
    When I navigate to "Ring URL"
    And I find the "Compare Plans" text
    And I find the "Basic" plan text
    Then I get the "Ring basic yearly price" and save it

  Scenario: Searching Blink subscriptions plans
    When I navigate to "Blink URL"
    And I find the "Plan: Blink Basic" text
    And I find the "Yearly" text
    Then I get the "Blink basic yearly price" and save it


======----------------==============------------------


Scenario 7 - Comparing Ring vs Blink subscriptions plans

Feature: Compare Subscriptions
  As a user, I want to compare the saved prices of Ring and Blink plans.

  Scenario: Comparing Ring vs Blink subscriptions from both pages
    Given I have saved the Ring and Blink yearly prices
    When I compare the prices of Ring and Blink plans
    And I print both prices on console
    Then I print on console both plan prices comparison results
    And I highlight the cheaper plan