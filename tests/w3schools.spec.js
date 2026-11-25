const { test, expect } = require('@playwright/test');

test('homepage has the right title', async ({ page }) => {
  await page.goto('https://www.w3schools.com');
  await expect(page).toHaveTitle(/W3Schools/);
});

test('JavaScript tutorial page opens', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/');
  await expect(page.locator('h1').first()).toContainText('JavaScript');
});
