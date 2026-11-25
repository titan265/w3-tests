const { test, expect } = require('@playwright/test');

test('homepage has the right title', async ({ page }) => {
  await page.goto('https://www.w3schools.com');
  await expect(page).toHaveTitle(/W3Schools/);
});

test('JavaScript tutorial page opens', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/');
  await expect(page.locator('h1').first()).toContainText(/javascript/i);
});

const topics = [
  { path: 'html', heading: /html/i },
  { path: 'css', heading: /css/i },
  { path: 'js', heading: /javascript/i },
  { path: 'python', heading: /python/i },
];

for (const topic of topics) {
  test(`${topic.path} tutorial has the right heading`, async ({ page }) => {
    await page.goto(`https://www.w3schools.com/${topic.path}/`);
    await expect(page.locator('h1').first()).toContainText(topic.heading);
  });
}
