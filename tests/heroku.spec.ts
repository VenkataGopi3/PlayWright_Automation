import { test, expect } from "@playwright/test";
import { Console } from "console";

test("Heroku Application Flow", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("//a[text()='Checkboxes']").click();
    await page.locator("(//input[@type='checkbox'])[1]").click();
    await page.locator("(//input[@type='checkbox'])[1]").isChecked;
    console.log("Is Checked!");
    await page.locator("(//input[@type='checkbox'])[2]").isDisabled;
    console.error("Is not Disabled!");
    await page.locator("(//input[@type='checkbox'])[2]").click();
    console.log("Is Disabled!");
    await page.locator("(//input[@type='checkbox'])[2]").isChecked;
    console.log("Is Enabled!");
    await expect(page.locator("div[style='text-align: center;']")).toContainText("Powered by ");
    console.log("Is Contained!");
    

});