Feature: network-page Feature

    Background:
    Given A user opens Telnyx network page

    Scenario: Header section displayed on Network page.
    Then A user sees header section in a port of view

    Scenario: Security benefit element displayed on Network page.
    When A user scrolls to security benefit element
    Then A user sees security benefit element in a port of view

    Scenario: Telnyx network diagram displayed Network page.
    When A user scrolls to Telnyx network diagram
    Then A user sees Telnyx network diagram in a port of view

    Scenario: Virtual Cross Connects description displayed on Network page.
    When A user scrolls to Virtual Cross Connects description
    Then A user sees Virtual Cross Connects description in a port of view

    Scenario: Footer section displayed on Network page.
    When A user scrolls to Multi-Cloud Architecture section
    Then A user sees Multi-Cloud Architecture section in a port of view