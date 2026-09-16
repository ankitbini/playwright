Feature: As a User I can intract with text areas and Hidden text


    @smoke
    @regression
    Scenario: I should intract and assert on text areas
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "text area" should contain the value "Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling."
        And I fill in the "text area" input with "Ankit Sharma text area"
        And the "text area" should contain the value "Ankit Sharma text area"

    
    @smoke
    @regression
    Scenario: I should intract and assert on hidden and displayed text
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "show hide text" should be displayed
        And the "show hide text" should contain the text "This is visible"
        And I click on the "show hide button" button
        And the "show hide text" should not be displayed