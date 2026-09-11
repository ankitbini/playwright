Feature: As a User I should be able create contacts

    @dev
    @smoke
    @regression
    Scenario: I should able to create a new contacts
        Given I am on the "home" page
        And I click on the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should contain the text "Create Contact"
        And I fill in the "name" input with "Ankit Sharma"
        And I select the "Male" option from the "gender"
        And I fill in the "phone" input with "1234567890"
        And I fill in the "street" input with "123 Main St"
        And I fill in the "city" input with "New York"
        And I click on the "save" button
        And I am directed to the "home" page
        And I fill in the "search" input with "Ankit Sharma"
        And the "full name label" should contain the text "Name:"
        And the "name" should not equal the text "Ankit Sharma"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should contain the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should contain the text "123 Main St"
        And the "edit" should be displayed
        And the "delete" should be displayed


        
