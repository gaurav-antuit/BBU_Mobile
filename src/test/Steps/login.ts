import { When, Given, Then } from "@cucumber/cucumber";

import { chromium, Page, Browser, expect } from "@playwright/test";

let page: Page ;

let browser: Browser

         Given('I am on BBU-ION login page', {timeout: 8*1000} ,  async function () {
          browser =await chromium.launch ( {headless : false} ) 
           
          page =await browser.newPage() ;
          // iphone SE
         page.setViewportSize ({width : 375 , height :667})
          await page.goto('https://qa.bbu-ion.com/')  ;
         
        });

         When('Enter User name', {timeout: 5*1000} , async function () { 
         // await page.locator('first.last@grupobimbo.com or first.last@gbsupport.net').type("Test@123") 
           
          await page.getByPlaceholder('first.last@grupobimbo.com or first.last@gbsupport.net').fill('Test.IONUser10@gbfrontline.com') ;

         });  



         When('Click on first next button', async function () {
           await page.getByRole('button', { name: 'Next' }).click() ;
         });


         When('Enter Password', async function () {
          
           await page.getByPlaceholder('Password').fill('tRee>8425605') ;
         
          });

           When('Click on next button', async function () {
           await page.getByRole('button', { name: 'Sign in' }).click() ;
         });

   

         When('Click on stay on button', async function () {
          await page.getByRole('button', { name: 'Yes' }).click() ;
         });

        Then('I see Home page of ION application', async function () {

          const Title = 'Intelligent Ordering Network'  ;

          await expect(page).toHaveTitle(Title) ;
          page.close() ;

         

          
         });

         When('click on logout button', async function () {

          await page.getByTestId('toggleMenu').click();

          await page.getByText('Sign Out').click();
          
        });

        Then('user should able to logout  Succssfully', async function () {
          await page.close() ;

          console.log("  user logout successfully") ;
        });