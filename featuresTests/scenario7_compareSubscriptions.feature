Feature: Compare Subscriptions
  As a user, I want to compare the saved prices of Ring and Blink plans.

  Scenario: Comparing Ring vs Blink subscriptions from both pages
    Given I have saved the Ring and Blink yearly prices
    When I print both prices to the console
    Then I compare the prices and print the result