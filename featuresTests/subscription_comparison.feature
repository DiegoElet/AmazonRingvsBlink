Feature: Ring vs Blink Subscription Comparison
  As a user, I want to compare Ring and Blink subscription plans

  Scenario: Searching Ring subscriptions plans
    When I navigate to the "Ring URL"
    And I find the "Compare Plans" text
    And I find the "Basic" plan text
    Then I get the "Ring basic yearly price" and save it

  Scenario: Searching Blink subscriptions plans
    When I navigate to the "Blink URL"
    And I find the "Plan: Blink Basic" text
    And I find the "Yearly" text
    Then I get the "Blink basic yearly price" and save it

  Scenario: Comparing Ring vs Blink subscriptions from both pages
    Given I have saved the Ring and Blink yearly prices
    When I print both prices to the console
    Then I compare the prices and print the result
