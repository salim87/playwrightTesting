import{test, expect, Browser, Page, Locator} from "@playwright/test"

import { webkit, firefox, chromium } from "@playwright/test"
import path from "path"

test('login test', async ()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page= await browser.newPage()
  //  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    const username= 'admin';

    const password ='admin';

   // const authHeader= 'Basic ' +  btoa(username+":" +password)
    page.setExtraHTTPHeaders({Authorization: createAuthHeader(username,password)})

    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    

   

});
function createAuthHeader(username:any, password:any){
    return 'Basic ' +  btoa(username+":" +password);
   }