const {test,expect,request} = require('@playwright/test');
const {APIUtils} = require('../utils/APIUtils');

const loginPayload = {userEmail:"shr1@gmail.com",userPassword:"Abcdefg123!"};
const orderPlayload = {orders:[{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};


let response;
test.beforeAll(async()=>{

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload);
    response = await apiUtils.createOrder(orderPlayload);
});


test(" @API Place the Order", async({page})=>{
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
                                    },  response.token);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator('button[routerlink*="myorders"]').click();

const row = await page.locator("tbody tr").first().waitFor();
await page.waitForLoadState("networkidle");
const rows = await page.locator("tbody tr",{delay: 1500});

for(let i=0; i<await rows.count(); ++i){
 const rowOrderId = await rows.nth(i).locator('th').textContent();
  console.log(rowOrderId);
 if(response.orderId.includes(rowOrderId))
  {
      await rows.nth(i).locator('button').first().click();
      break;
 }
}

const orderIdDetails = await page.locator(".col-text").textContent();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});



