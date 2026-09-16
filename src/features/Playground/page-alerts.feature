Feature: As a User I can intract with page alerts

    
    @smoke
    @regression
    Scenario: I should intract and assert on page alerts
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "error alert" should contain the text "This is an error alert — check it out!"
        And the "warning alert" should contain the text "This is a warning alert — check it out!"
        And the "info alert" should contain the text "This is an info alert — check it out!"
        And the "success alert" should contain the text "This is a success alert — check it out!"