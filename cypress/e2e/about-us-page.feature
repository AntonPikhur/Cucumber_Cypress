Feature: about-us-page Feature

    Background:
    Given A user opens Telnyx about us page

    Scenario: Existing of video player element on about us page.
    When A user scrolls to video player element
    Then A user sees video player element in a port of view

    Scenario: Existing of What makes us different section on about us page.
    When A user scrolls to What makes us different section
    Then A user sees What makes us different section in a port of view

    Scenario: Existing of Our values section about us page.
    When A user scrolls to Our values section
    Then A user sees Our values section in a port of view

    Scenario: Existing of Chicago office section on about us page.
    When A user scrolls to Chicago office section
    Then A user sees Chicago office section in a port of view

    Scenario: Existing of Telnyx brand section on about us page.
    When A user scrolls to Telnyx brand section
    Then A user sees Telnyx brand section in a port of view