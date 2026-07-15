const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page = page
        this.header = page.getByRole('heading', { name: 'Sign In' })
        this.username = page.getByPlaceholder('Enter Email')
        this.password = page.getByPlaceholder('Enter Password')
        this.loginbtn = page.getByRole('button', { name: 'Sign in' })
    }
    async gotourl() {
        await this.page.goto('https://freelance-learn-automation.vercel.app/login')
    }

    async login(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
        
    }
    async VerifyHeader()
    {
        await expect(this.header).toBeVisible()
    }
}
module.exports = LoginPage
