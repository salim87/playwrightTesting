import{test, expect, Browser, Page, Locator} from "@playwright/test"

import { webkit, firefox, chromium } from "@playwright/test"
import path from "path"

test('login test', async ()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page= await browser.newPage()
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    // const firstName:Locator = page.locator('#input-firstname')
    // const lastName:Locator= page.locator('#input-lastname')

    // const email:Locator= page.locator('#input-email')
    // const telephone:Locator= page.locator('#input-telephone')
    // const password:Locator= page.locator('#input-password') 
    // const confirmPassword:Locator= page.locator('#input-confirm')

    // await firstName.fill('Tas')
    // await lastName.fill('Prionti')
    // await email.fill('salim@abc.com')
    // await telephone.fill('234567890')
    // await password.fill('playwright@123')
    // await confirmPassword.fill('playwright@123')
    const email:Locator= page.locator('#input-email')
    const password:Locator= page.locator('#input-password')
    const login:Locator = page.locator('//input[@value="Login"]') 
    await email.fill('salim@abc.com')
    await password.fill('playwright@123')
    await login.click()

    const title = await page.title()
    console.log("page title is ", title)
    expect(title).toEqual("My Account")

    await page.screenshot({path: 'homepage.png'})
    await browser.close()




})