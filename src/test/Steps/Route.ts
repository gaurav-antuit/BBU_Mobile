import {Given , When, Then, setDefaultTimeout} from '@cucumber/cucumber' 

import {Page, chromium, Browser, expect} from '@playwright/test'

import { pageFixture } from '../../hooks/pageFixture';

When('click on store', async function () {
     //await pageFixture.page.getByText('AIM 0141 PATS MEAT FARMS T 9 HEWITT SQUARE-LARK' ).click();

     await pageFixture.page.getByText("AIM 0141 PATS MEAT FARMS T").click();
  });


When('click on Add button', async function () {
   
    await pageFixture.page.getByRole('button', { name: 'Add' }).click();
    await pageFixture.page.locator('.checkbox').first().check();

  });

Then('Add Product button should be visible', async function () {

     
   await expect(pageFixture.page.getByRole('button', { name: 'Add Product' })).toBeEnabled() ;

   //page.close() ;
    
  }); 