Feature: As a User I can intract with login forms

    
    @smoke
    @regression
    Scenario Outline: I should intract and assert on login forms using environment variables - localhost
        Given I am on the "home" page
        And I click on the "playground" button
        When I am directed to the "playground" page
        And I fill in the "email" input with "$.TEST_EMAIL"
        And I fill in the "password" input with "$.TEST_PASSWORD"
        And the "email" should contain the value "admin@testingtalkshub.com.au"
        And the "password" should contain the value "<password>"

        @localhost
        Examples:
            | password     |
            | Password1234 |

        @production
        Examples:
            | password     |
            | J2r@kka@IL |