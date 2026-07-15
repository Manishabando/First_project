import { test, expect } from '@playwright/test';

test('Test form', async function({page}){

await page.goto("https://app.playonereal.com/agent-signup")

await page.getByPlaceholder("Enter your first name").fill("Manisha")
await page.getByPlaceholder("Enter your last name").fill("Bando")

await page.getByPlaceholder("eg. johndoe9").fill("Manishabando")
await page.getByPlaceholder("johndoe@example.com").fill("testmani123@gmail.com")
await page.getByPlaceholder("Choose password").fill("Pass@123456789")
await page.getByPlaceholder("Confirm password").fill("Pass@123456789")

await page.getByRole('checkbox').nth(0).check()
await page.getByRole('checkbox').nth(1).check()


await page.getByRole('button', {name: /sign in/})
})
