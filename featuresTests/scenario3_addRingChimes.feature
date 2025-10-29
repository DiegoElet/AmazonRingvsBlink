Feature: Add Ring Chimes
  As a user, I want to find and add two Ring Chimes to my cart.

  Scenario: Adding Ring Chime Pro
    Given I am on the Amazon homepage
    When I search for "Ring chime Pro"
    And I click on the "Ring Chime Pro" result
    And I select quantity "2"
    And I add the item to the cart
    Then I validate "Added to cart" is displayed