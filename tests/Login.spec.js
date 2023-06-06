// @ts-check
const { test, expect } = require('@playwright/test');


const  {LoginPage} = require ('../src/test/PageObject/HomePage') ;

test('login', async ({ page }) => {

  const login = new LoginPage(page) ;

    await login.GotoBBUURL() ;

    await login.Login('Test.IONUser10@gbfrontline.com' ,'tRee>8425605')
     
    await login.GotoRoutePage();

    const Header_Title ='Intelligent Ordering Network' ;

    await expect (page).toHaveTitle(Header_Title) ; 
 
});

