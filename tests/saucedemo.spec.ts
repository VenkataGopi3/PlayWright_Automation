import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com');
  console.log("Navigated to Saucedemo");
  await page.fill('#user-name', 'standard_user');
  console.log("Username entered");
  await page.fill('#password', 'secret_sauce');
  console.log("Password entered");
  await page.click('#login-button');
  console.log("Login button clicked");
  await expect(page.locator('.title')).toHaveText('Products');
  console.log("Login Successful!");
  // const firstProduct = page.locator(".inventory_item_name");
  await page.click('#add-to-cart-sauce-labs-backpack');
  console.log("Item Added Successful!")
  await page.click('.shopping_cart_link');
  await expect(page.locator('.title')).toHaveText('Your Cart');
  await expect(page.locator('.inventory_item_price')).toHaveText('$29.99');
  await page.click('#checkout');
  await page.locator('#first-name').fill('Venkata');
  await page.locator('#last-name').fill('Gopi');
  await page.locator('#postal-code').fill('500081');
  await expect(page.locator('.title')).toContainText('Checkout: Your Inform');
  console.log("Information Entered Successful!");
  await page.click('#continue');
  await expect(page.locator('.title')).toContainText('Overview');
  const expectedPrice = "29.99";
  // await expect(page.locator('.summary_subtotal_label')).toContainText('29.99');
  const subtotalText = await page.locator('.summary_subtotal_label').innerText();
  const actualPrice = subtotalText.replace("Item total: $", "").trim();
  expect(actualPrice).toEqual(expectedPrice);
 console.log("Prices are equal!");
 await page.click('#finish');
 console.log("Order Placed Successful!");
 await expect(page.locator('.title')).toContainText('Complete!');
 await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
 console.log("Order Placed Successful!");
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
  await page.locator("textarea\[name='q']").fill("Playwright automation");
  // 4. Press Enter
  await page.keyboard.press("Enter");
  // 5. Wait for results
  await page.waitForSelector("text=Playwright");
  // 6. Expect the title to contain search text
  await expect(page).toHaveTitle(/Playwright/);

});