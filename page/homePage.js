const { expect } = require('@playwright/test')

class HomePage {
  constructor(page) {
    this.page = page
    this.manageoption = page.getByRole('img', { name: 'menu' })
    this.menu = page.getByRole('img', { name: 'menu' })
    this.logout = page.getByRole('button', { name: 'Sign out' })
  }

  async VerifyManageOption() {
    
    await expect(this.manageoption).toBeVisible()
  }

  async LogoutfromApplicatiom() {
    await this.menu.click()
    await this.logout.click()
  }
}

module.exports = HomePage