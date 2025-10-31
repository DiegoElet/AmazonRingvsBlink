Feature: Set US delivery Address
  As a user, I want to set my delivery zip code to a US location.

  Scenario: Setting US zip code as delivery
    Given I am on the Amazon homepage
    When I click on Deliver to
    And I set the US zip code to "20212" on Choose Location popup
    Then I click on Done to confirm