import { When, Given, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { chromium, Page, Browser, expect } from "@playwright/test";

import { pageFixture } from "../../hooks/pageFixture"; 



setDefaultTimeout (8 * 1000 *2 )

         Given('I am on BBU-ION login page',   async function () {
      
          // iphone SE
          pageFixture.page.setViewportSize ({width : 375 , height :667})
          await pageFixture.page.goto('https://qa.bbu-ion.com/')  ;
         
        });

         When('Enter User name', async function () { 
           
          await pageFixture.page.getByPlaceholder('first.last@grupobimbo.com or first.last@gbsupport.net').fill('Test.IONUser10@gbfrontline.com') ;
         
         });  



         When('Click on first next button', async function () {
           await pageFixture.page.getByRole('button', { name: 'Next' }).click() ;
         });


         When('Enter Password', async function () {
          
           await pageFixture.page.getByPlaceholder('Password').fill('tRee>8425605') ;
         
          });

           When('Click on next button', async function () {
           await pageFixture.page.getByRole('button', { name: 'Sign in' }).click() ;
         });

   

         When('Click on stay on button', async function () {
          await pageFixture.page.getByRole('button', { name: 'Yes' }).click() ;
         });

        Then('I see Home page of ION application', async function () {

          const Title = 'Intelligent Ordering Network'  ;

          await expect(pageFixture.page).toHaveTitle(Title) ;

          console.log(" User login successfully ")
             

          
         });

         When('click on logout button', async function () {

          await pageFixture.page.getByTestId('toggleMenu').click();

          await pageFixture.page.getByText('Sign Out').click();


          
        });

        Then('user should able to logout  Succssfully', async function () {
        

          console.log("  user logout successfully") ;

           await pageFixture.page.close() ;
        });

        When('click on Toggle Menu', async function () {
          await pageFixture.page.getByTestId('toggleMenu').click();
        });

  
        When('Click on language button', async function () {
          await pageFixture.page.locator('.icon').nth(1).click();
        });

 

        Then('user should able to change language Succssfully', async function () {
          
          console.log ("  Language changed successfully")

      
        })