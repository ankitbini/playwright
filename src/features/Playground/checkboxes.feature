Feature: As a User I can intract with checkboxes

    
    @smoke
    @regression
    Scenario: I should intract and assert with checkboxes
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        Then the "blue" check box should not be checked
        And I check the "grey" check box
        And I check the "green" check box
        And the "red" check box should not be checked
        And the "purple" check box should not be checked
        And I uncheck the "grey" check box
        And the "grey" check box should not be checked