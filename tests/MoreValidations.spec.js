const { test, expect } = require('@playwright/test')

test.describe.configure({mode:'parallel'});//serial

test("@Web1 Popup Validation", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    // await page.goto('http://google.com');
    // await page.goBack();
    //   await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    page.on('dialog', dialog => dialog.accept());
    
    await page.locator('#confirmbtn').click();
    
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator('#courses-iframe');
    await framesPage.locator('li a[href*="lifetime-access"]:visible').click();

    const textCheck = await framesPage.locator('div.text h2').textContent();

    console.log(textCheck.split(' ')[1]);
})



test("@Web Screenshot & Visual Comparision", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'})
    await page.locator('#hide-textbox').click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();
})

test("Visiual testing",async({browser})=>{
    const context  = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://flightware.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png')

})

 