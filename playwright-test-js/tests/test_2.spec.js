const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest Blog on Bing', async ({ page }) => {
    await page.goto('https://www.bing.com')
    const element = await page.$('[id="sb_form_q"]')
    await element.click()
    await element.type('LambdaTest')
    const searchButton = await page.waitForSelector('[id="search_icon"]')
    await searchButton.click()
    await page.waitForSelector('[class="b_title"]')
    const title = await page.title()

    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('LambdaTest Blog'))
  })
})
