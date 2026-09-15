Feature: As a User I can intract with toggle buttons

    @dev
    @smoke
    @regression
    Scenario: I should intract and assert on toggle buttons
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "toggle one" toggle should be checked
        And I uncheck the "toggle one" toggle
        And the "toggle one" toggle should not be checked
        And I check the "toggle one" toggle
        And the "toggle one" toggle should be checked
        And the "toggle two" should not be enabled