import {Before ,After, Status} from "@cucumber/cucumber" ;

import {chromium, Browser ,Page } from "@playwright/test" ;
import { pageFixture } from "./pageFixture";
import { BrowserContext } from "playwright";

let page :Page
let browser:Browser 
let context: BrowserContext



Before (async function () {
    browser =await chromium.launch ({ headless : false})
   page = await browser.newPage() ;
   pageFixture.page = page; 
    
})

After (async function ( {pickle , result}) {

    // screenshot
     
    console.log( "   " + result?.status) ;

    if (result?.status == Status.FAILED)

{
    const img =await pageFixture.page.screenshot({path :"./test-result/screenshots/${pickle.name}.png", type: "png"})
    await this.attach(img, "image/png")
}
    await pageFixture.page.close() ;
    await browser.close() ;
    
})