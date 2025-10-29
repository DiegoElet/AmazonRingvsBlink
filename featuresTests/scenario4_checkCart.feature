Feature: Check Cart
  As a user, I want to verify the items in my cart.

  Scenario: Checking both items in the Cart
    Given I have items in my cart
    When I go to the cart
    Then I should see "Shopping Cart"
    And I should see the "Save for later" button
    And I should see the "Subtotal" text