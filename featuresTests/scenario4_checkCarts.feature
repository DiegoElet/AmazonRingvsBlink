Feature: Check Cart
  As a user, I want to verify if all items are in my cart.

  Scenario: Checking all items are in the Cart
    Given I have items in my cart
    When I go to the cart
    And I should see "Shopping Cart"
    And I should see the "Ring Video Doorbell Pro 2" in the cart
    And I should see the "Ring Chime" in the cart
    And I should see the "Blink Video Doorbell + Mini 2 Motion & chime alerts" in the cart
    Then I should see the "Subtotal" text