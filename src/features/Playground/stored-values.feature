Feature: As a User I can intract with stored values

    
    @smoke
    @regression
    Scenario: I should intract and assert on stored values
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I retrieve "first value" text and store it as "first value" in global variables
        And the "second value" should equal the "first value" stored in global variables
        And the "fourth value" should not equal the "first value" stored in global variables
        And the "fourth value" should contain the "first value" stored in global variables
        And the "fifth value" should contain the "first value" stored in global variables
        And the "third value" should not contain the "first value" stored in global variables
