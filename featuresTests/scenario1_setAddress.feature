Feature: Set US Address on Amazon
  As a user, I want to set my delivery address to a US zip code.

  Scenario: Setting US address
    Given I open the Amazon homepage
    When I handle the "Visiting from Canada?" popup
    When I set the US address to "20212"
    Then I click on the main search bar to confirm