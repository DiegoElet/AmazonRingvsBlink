Feature: Amazon Shopping Workflow
  As a user, I want to complete the full shopping workflow on Amazon

  Scenario: Setting US address
    Given I open the Amazon homepage
    When I handle the "Visiting from Canada?" popup
    When I set the US address to "20212"
    Then I click on the main search bar to confirm

  Scenario: Adding Ring Doorbell Pro 2
    Given I am on the Amazon homepage with a US address
    When I search for "Ring doorbell pro 2"
    And I click on the "Video Doorbell Pro 2" result
    And I add the item to the cart
    Then I validate "Added to cart" is displayed

  Scenario: Adding Ring Chime Pro
    Given I am on the Amazon homepage
    When I search for "Ring chime Pro"
    And I click on the "Ring Chime Pro" result
    And I select quantity "2"
    And I add the item to the cart
    Then I validate "Added to cart" is displayed

  Scenario: Checking both items in the Cart
    Given I have items in my cart
    When I go to the cart
    Then I should see "Shopping Cart"
    And I should see the "Save for later" button
    And I should see the "Subtotal" text
