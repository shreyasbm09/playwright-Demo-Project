
//const {test, expect} = require('@playwright/test');
import {test} from '@playwright/test';


test(" @HappyPath Launch Browser and Scroll operations ", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    await page.locator(".product").filter({hasText:"Mango"}).getByRole('button',{name: "ADD TO CART"}).click();

await page.mouse.wheel(0,1000);
await page.keyboard.press("PageUp");
await page.keyboard.press("PageDown");
await page.mouse.wheel(0,-1000);

await page.locator("div.Cart").getByAltText("Cart").click();
await expect(await page.locator(".cart-items").locator(".product-name").nth(1)).toHaveText("Mango - 1 Kg");

await page.getByRole('button', {name:"PROCEED TO CHECKOUT"}).click();
await page.getByPlaceholder("Enter promo code").fill("rahulshettyacademy");
 await page.getByRole('button', {name:"Apply"}).click();
await page.waitForSelector(".promoInfo",{state:"visible"});

await expect(await page.locator(".promoInfo")).toHaveText("Code applied ..!");
await page.getByRole('button',{name:"Place Order"}).click();

await page.getByRole('combobox').selectOption("India");// button, img, checkbox, radio, link, textbox, combobox

await page.getByRole('checkbox').check();
await page.getByRole('button',{name:"Proceed"}).click({delay: 1000});

await page.screenshot({path:"order.jpg", fullpage:true});

//await page.pause();
});


//ARIA (Accessible Rich Internet Applications) get by role is used to locate elements based on their ARIA roles, which are attributes that define the purpose and behavior of an element in terms of accessibility.
//  This is particularly useful for testing web applications for accessibility compliance, as it allows you to interact with elements in a way that mimics how assistive technologies would interact with them. 
// For example, you can use getByRole to locate buttons, links, checkboxes, and other interactive elements based on their roles, making your tests more robust and accessible.      




  
    // await framesPage.locator('li a[href*="lifetime-access"]:visible').click();

    // const textCheck = await framesPage.locator('div.text h2').textContent();

    // console.log(textCheck.split(' ')[1]);


test("@iFrames Handling",async({browser})=>{
    const context = await browser.newContext() ;
        const page = await context.newPage()  ;

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
       const iFramePage =  await page.frameLocator("#courses-iframe");

       await iFramePage.getByRole('link',{name:'VIEW ALL COURSES'}).click();
       await page.waitForLoadState('networkidle');
       
        const firstCourse =  await iFramePage.locator('.ProductCard a .ProductTitle ').first().textContent();
         // await page.waitForSelector(firstCourse);
       const listOfCourses = await iFramePage.locator('.ProductCard a .ProductTitle ').allTextContents();
       console.log(listOfCourses);
      console.log(listOfCourses.length);
})

test("@SwitchTabs ", async({browser})=>{
    const context  = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const title1 = page.title();
    await page.getByRole('link',{name:/Take QA Skill Assessments/}).click();

    const pages = context.pages();

   await pages[1].bringToFront();
    await page.screenshot({path:'switchtabs.jpg',type:'jpeg'})

    for (const p of pages) {
  if ((await p.title()) === title1) {
    await p.bringToFront();
  }
  page.pause() ;
}   
})


test("@Alerts",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
   await page.goto('https://demoqa.com/alerts');
      page.on('dialog', dialog => dialog.accept('Shreyas'));// will listen for event // dismiss()//accept()//messege()    
    await page.locator('#promtButton').click();
})

test("@DragDrop",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

  // 1. Navigate to the page
await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

// 2. Locate the iframe (it uses a class named 'demo-frame')
const frame = page.frameLocator('.demo-frame').first();

// 3. Define the source and target locators WITHIN the frame
const sourceItem = frame.getByAltText('Planning the ascent');
const targetTrash = frame.locator('div#trash');

// 4. Perform the drag and drop
await sourceItem.dragTo(targetTrash);


})