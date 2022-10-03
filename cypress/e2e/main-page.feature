Feature: main-page Feature

    Background:
    Given A user opens Telnyx main page

    Scenario: Existing of Explore product section on Main page.
    When A user scrolls to Explore product section
    Then A user sees Explore product section in a port of view

    Scenario: Existing of Customer story section on Main page.
    When A user scrolls to Customer story section
    Then A user sees Customer story section in a port of view

    Scenario: Existing of Switch + Save section on Main page.
    When A user scrolls to Switch + Save section
    Then A user sees Switch + Save section in a port of view

    Scenario: Existing of Reviews section on Main page.
    When A user scrolls to Reviews section
    Then A user sees Reviews section in a port of view

    Scenario: Existing of footer section on Main page.
    When A user scrolls to footer section
    Then A user sees footer section in a port of view