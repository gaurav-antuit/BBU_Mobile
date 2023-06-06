Feature: User authentication test
   Scenario: user is able to login 
   Given I am on BBU-ION login page 
   When Enter User name
   And Click on first next button 
   And Enter Password 
   And Click on next button 
   And Click on stay on button 
   Then I see Home page of ION application 

   Scenario: user should able to logout Succssfully 
   Given I am on BBU-ION login page 
   When Enter User name
   And Click on first next button 
   And Enter Password 
   And Click on next button 
   And Click on stay on button 
   And click on logout button 
   Then user should able to logout  Succssfully

  