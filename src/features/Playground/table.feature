Feature: As a User I can intract with tables

    
    @smoke
    @regression
    Scenario: I should intract and assert on buttons on tables
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And the "basic table" table should equal the following:
            | 159 | 6   | 24 | 4   |
            | 237 | 9   | 37 | 4.3 |
            | 262 | 16  | 24 | 6   |
            | 305 | 3.7 | 67 | 4.3 |
            | 356 | 16  | 49 | 3.9 |
        And the "basic table" table should not equal the following:
            | 159 | 6   | 24 | 4   |
            | 237 | 9   | 37 | 4.3 |
            | 262 | 16  | 24 | 6   |
            | 305 | 3.4 | 67 | 4.3 |
            | 356 | 16  | 49 | 3.9 |