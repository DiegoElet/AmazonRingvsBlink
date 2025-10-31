Feature: Amazon Adding different products workflow
  As a user, I want to add different products to my Amazon cart.
//using Scenario Outline to add Ring and Blink products

  Scenario Outline: Adding products to cart
    Given I am at Amazon homepage
    When I search for "<product>"
    And I click on the "<result>" result
    And I select quantity "<quantity>"
    And I add the item to the cart
    Then I validate "Added to cart" is displayed

    Examples:
      | product                                              | result                                              | quantity |
      | Ring doorbell pro 2                                  | Video Doorbell Pro 2                                | 1        |
      | Ring chime Pro                                       | Ring Chime Pro                                      | 1        |
      | Blink Video Doorbell + Mini 2 Motion & chime alerts | Blink Video Doorbell + Mini 2 Motion & chime alerts | 1        |
