Feature: As a User I can refresh the browser and see the application

    
    @smoke
    @regression
    Scenario: I should refresh the browser and be on the page expacted
        Given I am on the "home" page
        And I refresh the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I refresh the "playground" page
        Then I am on the "playground" page