import { test, expect } from "@playwright/test";

test("SauceDemo End-to-End Flow", async ({ page }) => {

  await page.goto("https://www.saucedemo.com");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await expect(page).toHaveURL(/inventory/);
  console.log("Login Successful!");
  const firstProductAddButton = page.locator(".inventory_item button").first();
  await firstProductAddButton.click();
  await page.locator(".shopping_cart_link").click();
  await expect(page).toHaveURL(/cart/);
  await page.locator("#checkout").click();
  await page.locator("#first-name").fill("John");
  await page.locator("#last-name").fill("Doe");
  await page.locator("#postal-code").fill("500001");
  await page.locator("#continue").click();
  await expect(page).toHaveURL(/checkout-step-two/);
  const subtotalText = await page.locator(".summary_subtotal_label").innerText();
  console.log("Subtotal Text:", subtotalText);
  const actualPrice = subtotalText.replace("Item total: $", "").trim();
  const expectedPrice = "29.99";
  expect(actualPrice).toBe(expectedPrice);
  console.log("Price validation passed!");
  await page.locator("#finish").click();
  await expect(page).toHaveURL(/checkout-complete/);
  await expect(page.locator(".complete-header")).toContainText("Thank you for");
  console.log("Order Completed Successfully!");
  await page.locator("#back-to-products").click();
  await page.locator("#react-burger-menu-btn").click();
  await page.locator("#logout_sidebar_link").click();
  await expect(page).toHaveURL("https://www.saucedemo.com");
  console.log("Logout Successful!");
});
