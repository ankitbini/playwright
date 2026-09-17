Feature: As a User I can intract with autocomplete inputs

    
    
    Scenario: I should intract and assert with autocomplete inputs
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I fill in the "movies" input with "The G"
        #And I click on the "the goodfather" link
        And the "movies" should contain the value "The Goodfather"
        #And the "movies" should contain the value "The Goodfather: Part II"

    
    @smoke
    @regression
    Scenario: I can intract and assert the inputs
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "outlined required" should equal the value "Testing"
        And the "outlined disabled" should equal the value "Talks"
        And the "outlined readonly" should equal the value "Hub"
        And the "outlined required" should not equal the value "Testingg"
        And the "outlined required" should be enabled
        And the "outlined disabled" should not be enabled
        And I fill in the "outlined required" input with "Ankit Sharma"
        And the "outlined required" should equal the value "Ankit Sharma"

    
    @smoke
    @regression
    Scenario: I can intract and assert on input validation
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "outlined error" should contain the text "Error"
        And the "outlined error text" should contain the text "Incorrect entry"


