Feature: As a User I should be able to nevagate to home page

    
    @smoke
    @regression
    Scenario: I should able to see the contacts
        Given I am on the "home" page
        And the "Header logo" should be displayed
        Then the "contact header" should contain the text "Contacts"
