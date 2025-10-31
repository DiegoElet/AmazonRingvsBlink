Feature: Comparing the items price of all products that were checked on Scenario4
  As a user, I want to compare the prices of products I have checked previously.
  //using Scenario Outline

  Scenario Outline: Save product prices from cart
    Given I am on the cart page
    When I save the price for "<productName>"
    
    Examples:
      | productName                     |
      | Ring Video Doorbell Pro 2       |
      | Ring Chime                      |
      | Blink Video Doorbell            |
      | Blink Mini                      |

  Scenario: Compare Ring vs Blink bundles
    Given I have saved all product prices
    When I calculate the total for "Ring Video Doorbell Pro 2" and "Ring Chime"
    And I calculate the total for "Blink Video Doorbell" and "Blink Mini"
    Then I print both bundle totals on console
    And I highlight the cheaper bundle option