const { test, expect } = require('@playwright/test');

test("Client App Login", async ({ page }) => {
  const email = "shr1@gmail.com";
  const prodcutName = 'ZARA COAT 3';
  const products = page.locator('.card-body');

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Abcdefg123!");
  await page.getByRole("button", { name: 'Login' }).click();


  await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();

  await page.locator('.card-body').filter({hasText:'ZARA COAT 3'})
    .getByRole('button', { name: ' Add To Cart' }).click();

  //getbyrole list-->target li,ul alla lists 
  // listitem--> tagets only li tags
  await page.getByRole('listitem').getByRole('button', { name: 'Cart' }).click();
  await page.locator('div li').first().waitFor();
  await expect(await page.getByText('ZARA COAT 3')).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await expect(await page.getByText('ZARA COAT 3')).toBeVisible();

  await page.getByPlaceholder('Select Country').pressSequentially('Ind');
  await page.getByRole('button', { name: 'Ind' }).nth(1).click();

  await page.getByText('Place Order').click();

  await expect(page.getByText('Thankyou for the order.')).toBeVisible();



});



