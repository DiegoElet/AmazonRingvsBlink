Feature: Comparing the items price of all products that were checked on Scenario4
  As a user, I want to compare the prices of products I have checked previously.

  Scenario: Comparing products prices
    Given I have saved the prices of all checked products from Scenario4
    When I sum the prices of Ring Video Doorbell Pro 2 and Ring chime
    And I compare against the price of Blink Video Doorbell and Mini 2 Motion & chime alerts
    Then I print on console both total prices comparison results
    And I highlight the cheaper total price option