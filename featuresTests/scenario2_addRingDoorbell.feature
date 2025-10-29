Feature: Add Ring Doorbell
  As a user, I want to find and add a Ring Doorbell to my cart.

  Scenario: Adding Ring Doorbell Pro 2
    Given I am on the Amazon homepage with a US address
    When I search for "Ring doorbell pro 2"
    And I click on the "Video Doorbell Pro 2" result
    And I add the item to the cart
    Then I validate "Added to cart" is displayed