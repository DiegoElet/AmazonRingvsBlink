Feature: Search Ring Subscription
  As a user, I want to find the price for the Ring Basic plan.

  Scenario: Searching Ring subscriptions plans
    When I navigate to the "Ring URL"
    And I find the "Compare Plans" text
    And I find the "Basic" plan text
    Then I get the "Ring basic yearly price" and save it