const{test, expect}=require('@playwright/test')

test('Practice code test', async function({page}){

await page.goto("https://www.amazon.in/")

await page.getByRole("searchbox").fill('iphone 14')    

await page.waitForSelector('//div[@class="left-pane-results-container"]')

await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")

await page.keyboard.press("Enter")




})


