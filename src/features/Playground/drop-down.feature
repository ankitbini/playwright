Feature: As a User I can intract with drop down


    @smoke
    @regression
    Scenario: I should intract and assert on drop down
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I click on the "drop down button" button
        And the "drop down profile" should contain the text "Profile"
        And the "drop down my account" should contain the text "My account"
        And the "drop down logout" should contain the text "Logout"
        And I click on the "drop down my account" button
        And the "drop down profile" should not be displayed

    
    @smoke
    @regression
    Scenario: I should intract and assert on drop down selection
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I select the "10" option from the "age"
        And the "age" should contain the value "10"