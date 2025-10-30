Feature: Set US Country on Amazon
  As a user, I want to set my delivery country to the United States.

  Scenario: Setting US country
    Given I open the Amazon homepage
    When I click on Continue shopping
    And I handle the "Visiting from Canada?" popup
    And I set the delivery country to "United States"
    Then I click on the main search bar to confirm
   