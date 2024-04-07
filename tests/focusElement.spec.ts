import{test, expect, Browser, Page, Locator} from "@playwright/test"

import { webkit, firefox, chromium } from "@playwright/test"
import path from "path"

test('login test', async ()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page= await browser.newPage()
    await page.goto('https://orangehrm.com/en/book-a-free-demo/')

   await page.locator('#Form_getForm_FullName').focus()
   
   
})