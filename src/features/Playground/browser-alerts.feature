Feature: As a User I can intract with browser alerts

    
    @smoke
    @regression
    Scenario: I should intract and assert on browser alerts
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I click on the "browser alert" button
        Then I click accept on the alert dialog
        And I click on the "browser alert" button
        And I click dismiss on the alert dialog