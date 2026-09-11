Feature: As a User I can interact with the radio buttons

    
    
    @smoke
    @regression
    Scenario: As a user I should interact and assert the radio buttons
        Given I am on the "home" page
        And I click on the "playground" button
        And I am directed to the "playground" page
        And the "female radio button label" should contain the text "Female"
        And the "female radio button label" should not contain the text "Femalee"
        And the "female" radio button should be checked
        And the "male" radio button should not be checked
        Then I check the "male" radio button
        And the "male" radio button should be checked
        And the "female" radio button should not be checked
        And I check the "female" radio button
        And the "female" radio button should be checked
        And the "male" radio button should not be checked
        
