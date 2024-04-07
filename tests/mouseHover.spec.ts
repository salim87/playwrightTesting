import{test, expect, Browser, Page, Locator} from "@playwright/test"

import { webkit, firefox, chromium } from "@playwright/test"
import path from "path"

test('login test', async ()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page= await browser.newPage()
    await page.goto('https://www.spicejet.com/')

    await page.getByText('Add-ons').first().hover()

    await page.getByText('Visa Services').first().click

    await page.waitForTimeout(5000)

})