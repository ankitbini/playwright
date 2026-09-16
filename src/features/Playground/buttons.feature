Feature: As a User I can intract with buttons

    @dev
    @smoke
    @regression
    Scenario: I should intract and assert on buttons at index
      Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I click on the "1st" "my button" button
        And the "1st" "my button" should contain the text "One"
        And I click on the "2nd" "my button" button
        And the "2nd" "my button" should contain the text "Two"
        And I click on the "3rd" "my button" button
        And the "3rd" "my button" should contain the text "Three"