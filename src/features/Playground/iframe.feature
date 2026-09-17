Feature: As a User I can intract with IFrames

    
    @smoke
    @regression
    Scenario: I should intract and assert on IFrames
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I scroll to the "basic iframe"
        And I fill in the "search" input on the "basic iframe" iframe with "Abraham Perry"
        And the "searched contact" on the "basic iframe" iframe should be displayed
        And the "full name label" on the "basic iframe" iframe should contain the text "Abraham Perry"
        And the "name" on the "basic iframe" iframe should equal the text "Abraham Perry"
        And the "gender label" on the "basic iframe" iframe should contain the text "Gender:"
        And the "gender" on the "basic iframe" iframe should equal the text "Male"
        And the "edit" on the "basic iframe" iframe should be displayed
        And the "delete" on the "basic iframe" iframe should be displayed