
const { test,expect } = require("@playwright/test")


test("Security test request intercept", async ({ page }) => {

    const email = "shr1@gmail.com";
    const products = page.locator('.card-body');

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Abcdefg123!");
    await page.getByRole("button", { name: 'Login' }).click();


    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();


    await page.locator('button[routerlink*="myorders"]').click();


    //login and reach orders page
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6" })
    )
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator('p').last()).toHaveText("You are not authorize to view this order");



})