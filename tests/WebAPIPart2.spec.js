const {test,expect,request} = require('@playwright/test');

let webContext;

test.beforeAll(async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("shr1@gmail.com");
    await page.locator("#userPassword").fill("Abcdefg123!");
    await page.locator("#login").click();
     await page.waitForLoadState('networkidle');//waits applied for all the objects to load 

    await context.storageState({path:'state.json'});
    webContext = await browser.newContext({storageState:'state.json'});

})



test("@API Client App Login", async()=>{

const prodcutName = 'ZARA COAT 3';  
const email = 'shr1@gmail.com';

const page = await webContext.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const products = page.locator('.card-body')

    
   

    
    await page.locator('.card-body b').first().waitFor(); ///one more way to wait particular wait sinc the abvoe sol is flaky
    const allTitles = await page.locator('.card-body b').allTextContents()// grabs all the titles 
    console.log(allTitles);
   
   const count = await products.count();
   for(let i=0;i<count;i++){
    const title = await  products.nth(i).locator('b').textContent();
    if(title === prodcutName){
     await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }


  await  page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();

 const bool =  await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();

await page.locator("text=Checkout").click();
await page.locator("//input[@value='4542 9931 9292 2293']").fill(" ");
await page.locator("//input[@value='4542 9931 9292 2293']").fill("2222 2233 4445 6667");
await page.locator(".ddl").first().selectOption("10");
await page.locator(".ddl").nth(1).selectOption("10");

await page.locator('[name="coupon"]').fill("RahulShettyAcademy");
// await page.locator('text=Apply Coupon').last().click();

await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay: 150});
const dropdown  = await page.locator(".ta-results");

await dropdown.waitFor();
 const optionsCount = await dropdown.locator("button").count();
 for(let i = 0;i<optionsCount;i++){
 const text = await dropdown.locator("button").nth(i).textContent();
  if(text===" India"){
    await dropdown.locator("button").nth(i).click();
    break;
  }
 }

// await page.pause();
 expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

  await page.pause();

const orderId =await page.locator("label.ng-star-inserted").textContent();
console.log(orderId);

await page.locator('button[routerlink*="myorders"]').click();

const row = await page.locator("tbody tr").first().waitFor();
//await page.waitForLoadState("networkidle");
const rows = await page.locator("tbody tr",{delay: 1500});
 console.log(await rows.count());

for(let i=0; i<await rows.count(); ++i){

 const rowOrderId = await rows.nth(i).locator('th').textContent();
 await console.log(rowOrderId);
 if(orderId.includes(rowOrderId))
  {
      await rows.nth(i).locator('button').first().click();
      break;
 }
}
const orderIdDetails = await page.locator(".col-text").textContent();
expect(orderId.includes(orderIdDetails)).toBeTruthy();

await page.pause();


});


