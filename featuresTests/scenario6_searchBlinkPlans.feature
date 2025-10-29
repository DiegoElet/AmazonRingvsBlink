Feature: Search Blink Subscription
  As a user, I want to find the price for the Blink Basic plan.

  Scenario: Searching Blink subscriptions plans
    When I navigate to the "Blink URL"
    And I find the "Plan: Blink Basic" text
    And I find the "Yearly" text
    Then I get the "Blink basic yearly price" and save it