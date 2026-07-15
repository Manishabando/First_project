const { test, expect } = require('@playwright/test')
const LoginPage = require('../page/loginPage')
const HomePage = require('../page/homePage')

test('Verify login page usinf POM ', async ({ page }) => {
  const login = new LoginPage(page)
  const home = new HomePage(page)

  await login.gotourl()
  await login.login('admin@email.com', 'admin@123')
  await home.VerifyManageOption()
  await home.LogoutfromApplicatiom()
  await login.VerifyHeader()
})