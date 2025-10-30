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

