const{expect , test}=require('@playwright/test')

test("Test the form fields" , async function({page , context}){
 test.setTimeout(60000)

   /*
    // await page.goto("https://demoqa.com/text-box")
    await page.locator("#userName").fill("ABC")
    //await expect(page.locator('#userName')).toHaveCount(1);

    await page.locator("#userEmail").fill("admin@gmail.com")
    await page.getByPlaceholder("Current Address").fill("B-1212 Nilaya greens")
    await page.locator("#permanentAddress").fill("ABC - 123 Ranchi")
    await page.getByText("Submit").click()
    
    await page.locator("#output").isVisible()

    */
   /*
   //Verify the Checkbox 
    await page.goto("https://demoqa.com/checkbox")

    await expect(page).toHaveTitle("Check Box")

    await page.getByRole("checkbox").click()

    const checkbox = await page.locator("//span[normalize-space()='You have selected :']")
    
    await expect(checkbox).toHaveText("You have selected :")

    */
   /*
// Verify the radio button

        await page.goto("https://demoqa.com/radio-button")

        await expect(page).toHaveTitle("demosite")

        await page.locator("#yesRadio").check()

        const radiobtn = await page.locator("//p[@class='mt-3']")
        
        await expect(radiobtn).toContainText("Yes")


        */
       /*
       // Verify differnt types of Buttons 

       await page.goto("https://demoqa.com/buttons")
       await page.locator("//button[@id='doubleClickBtn']").dblclick()
       await expect(page.locator("#doubleClickMessage")).toContainText("You have done a double click")
        
       await page.locator("#rightClickBtn").click({button:'right'})
       await expect(page.locator("#rightClickMessage")).toContainText("You have done a right click")
          
       */
  // Verify Links 

       await page.goto("https://demoqa.com/links")
 
       const [newPage] = await Promise.all([
       context.waitForEvent('page'),

       page.locator("//a[@id='simpleLink']").click()
       ])

       await newPage.waitForLoadState();
       await expect(newPage).toHaveURL("https://demoqa.com/")
       await expect(newPage).toHaveTitle("demosite");
       
       await newPage.close();



});