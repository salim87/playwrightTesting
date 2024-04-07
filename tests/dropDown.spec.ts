import{test, expect, Browser, Page, Locator} from "@playwright/test"

import { webkit, firefox, chromium } from "@playwright/test"
import path from "path"

test('login test', async ()=>{

    const browser:Browser = await chromium.launch({headless:false})
    const page:Page= await browser.newPage()
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/MADE')

    const countryDropdown:Locator = page.locator('#Contact_CountryCode')

   // console.log(await countryDropdown.allInnerTexts())
   // await countryDropdown.selectOption( 'AQ')

   const cDropdown= '#Contact_CountryCode';

   const countries = await page.$$(cDropdown + '>option')
   
   const value= await page.locator('#Contact_CountryCode').textContent()
   //console.log(value)
   
   
// 
  for (const c of countries){
    const text= await c.textContent()
    if ( text === "Bangladesh"){
      await page.selectOption(cDropdown, {label:text})
      break;
  }
  }
  await page.waitForTimeout(10000)

}) 



  
