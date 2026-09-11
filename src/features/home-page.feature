Feature: As a User I should be able to nevagate to home page

    
    @smoke
    @regression
    Scenario: I should able to see the contacts
        Given I am on the "home" page
        And the "Header logo" should be displayed
        Then the "contact header" should contain the text "Contacts"

    
    @smoke
    @regression
    Scenario: As a user I don't expect to see a contact that doesn't exist
        Given I am on the "home" page
        And I fill in the "search" input with "Funny name"
        Then the "contact" should not be displayed
