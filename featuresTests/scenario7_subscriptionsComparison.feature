Feature: Compare Subscriptions
  As a user, I want to compare the saved prices of Ring and Blink plans.

  Scenario: Comparing Ring vs Blink subscriptions from both pages
    Given I have saved the Ring and Blink yearly prices
    When I compare the prices of Ring and Blink plans
    And I print on console both plan prices comparison results
    Then I highlight the cheaper plan option