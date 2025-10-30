Feature: Searching for Ring and Blink subscription plans
  As a user, I want to find both pages of Ring and Blink basic plans.

  Scenario: Searching Ring subscriptions plans
    When I navigate to "Ring URL"
    And I find the "Compare Plans" text
    And I find the "Basic" plan text
    Then I get the "Ring basic yearly price" and save it

  Scenario: Searching Blink subscriptions plans
    When I navigate to "Blink URL"
    And I find the "Plan: Blink Basic" text
    And I find the "Yearly" text
    Then I get the "Blink basic yearly price" and save it