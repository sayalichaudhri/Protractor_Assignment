Feature: Test dilip Oak's academy functionality

    @End2End
    Scenario Outline: Test the login functionality

        Given Chrome browser is open and hit the url

        Then User Enter the "<username>"
        And  User Enter "<password>"
        Then User should be able to logged in

        Examples:
            | username | password |
            
            | sayali     | pass     |
            | 44444      | word     |
            | admin@!34  | pass@123 |
            | 4444444444 | password |
