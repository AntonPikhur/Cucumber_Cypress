Feature: network-page Feature

    Background:
    Given A user opens Telnyx network page

    Scenario: Existing of header section on Network page.
    Then A user sees header section in a port of view

    Scenario: Existing of security benefit element on Network page.
    When A user scrolls to security benefit element
    Then A user sees security benefit element in a port of view

    Scenario: Existing of Telnyx network diagram Network page.
    When A user scrolls to Telnyx network diagram
    Then A user sees Telnyx network diagram in a port of view

    Scenario: Existing of Virtual Cross Connects description on Network page.
    When A user scrolls to Virtual Cross Connects description
    Then A user sees Virtual Cross Connects description in a port of view

    Scenario: Existing of footer section on Network page.
    When A user scrolls to Multi-Cloud Architecture section
    Then A user sees Multi-Cloud Architecture section in a port of view