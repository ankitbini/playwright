Feature: As a User I can intract with windows

    
    @smoke
    @regression
    Scenario: I should intract and assert on new windows
      Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I click on the "new window" button
        And the "2nd" window should contain the title "Contacts"
        And the "1st" window should contain the title "Playground"
        And I fill in the "search" input on the "2nd" window with "Sloane Juarez"
        And the "searched contact" on the "2nd" window should be displayed
        And the "full name label" on the "2nd" window should contain the text "Name:"
        And the "name" on the "2nd" window should equal the text "Sloane Juarez"
        And the "gender label" on the "2nd" window should contain the text "Gender:"
        And the "address label" on the "2nd" window should contain the text "Address:"
        And the "gender" on the "2nd" window should equal the text "Female"
        And the "edit" on the "2nd" window should be displayed
        And the "delete" on the "2nd" window should be displayed
        #And I wait "5" seconds