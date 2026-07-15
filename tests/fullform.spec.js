import { test, expect } from '@playwright/test';

test('Verify the registration form' , async function({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.getByPlaceholder('Name').fill('Manisha')
        
    await page.getByPlaceholder('Email').fill('manisha@gmail.com')
     
    await page.getByPlaceholder('Password').fill('Qwerty@123')

    await page.getByRole('checkbox', { name: 'SQL' }).nth(0).check();    
    await page.getByRole('checkbox', { name: 'AWS' }).check();   
    await page.locator("//input[@id='gender2']").click()
   // page.getByRole('radio')

})