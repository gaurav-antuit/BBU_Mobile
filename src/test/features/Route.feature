@test
Feature: Add product test
   Scenario: Add new store on route page 
   Given I am on BBU-ION login page 
   When Enter User name
   And Click on first next button 
   And Enter Password 
   And Click on next button 
   And Click on stay on button 
   And click on store
   And click on Add button
   Then Add Product button should be visible 