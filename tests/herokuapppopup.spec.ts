import { test, expect } from "@playwright/test";

test("Heroku Application Auth Alert", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("//a[text()='Basic Auth']").click();

    

});
