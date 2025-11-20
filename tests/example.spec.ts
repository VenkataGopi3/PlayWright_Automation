import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Google Search Test", async ({ page }) => {
  
  // 1. Open Google
  await page.goto("https://www.google.com");

  // 2. Accept cookies / continue if popup appears (optional)
  const agreeBtn = page.locator("button", { hasText: "I agree" });
  if (await agreeBtn.isVisible()) {
    await agreeBtn.click();
  }

  // 3. Type something in the search box
  await page.locator("input[name='q']").fill("Playwright automation");

  // 4. Press Enter
  await page.keyboard.press("Enter");

  // 5. Wait for results
  await page.waitForSelector("text=Playwright");

  // 6. Expect the title to contain search text
  await expect(page).toHaveTitle(/Playwright/);

});
