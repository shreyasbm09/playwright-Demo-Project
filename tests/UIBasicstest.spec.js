const { test, expect } = require('@playwright/test');

test('Browser Context-Validating Error Login', async function ({ browser }) {// function() can be written as ()=>



    const context = await browser.newContext(); //like new instance of the browser, without any pugins or cookies. We can inject cookies or proxy
    const page = await context.newPage(); // Creates new page inside the browser


    //  page.route('**/*.{jpg,png,jpeg}',
    //     route=>route.abort()
    //  );

    const userName = page.locator('input#username');
    const sigIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    //Above 2 lines are useful if we are specifying the properties of our Browser and page. if we dont
    //have anything to specify we can just pass this page parameter in the function paramrter only. 

     page.on('request',request=> console.log(request.url()));
     page.on('response',response=> console.log(response.url(),response.status()));


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css!!!! ,xpath selectors available in playwright
    //type and fill two mwthis to enter info in textbox
    await page.locator('input#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await sigIn.click();
    const errorMessage = await page.locator("[style*='block']").textContent();
    console.log(errorMessage);
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await sigIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(2).textContent());
    console.log(await cardTitles.last().textContent());

    const allTitles = await cardTitles.allTextContents()// grabs all the titles 

    console.log(allTitles);
});


test('Brower Context text', async ({ page }) =>//.only will help to run a single testcase. this will invoke the testcase which we specify it wiht only rest will wil ignored
{
    await page.goto("https://google.com/");
    console.log(await page.title());//gets the title of the page
    await expect(page).toHaveTitle("https://google.com/");
});

//tests present in ths same file will execute in a sequencial order. 
//tests in differrent files will start the execution paralleley


test("UI Controls", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('input#username');
    const sigIn = page.locator('#signInBtn');
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await console.log(page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    // await page.pause();

});

test("Child Window Handle", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('input#username');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),//listen for any new page pending, fulfilled, rejected
            documentLink.click()
        ]
    );//new page is open 

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split('@');
    const domain = arrayText[1].split(" ")[0];
    //console.log(domain);

    await page.locator('input#username').fill(domain);
    console.log(await page.locator('#username').inputValue());//textcontent() wont work here because our input value in not attached to the fom here we have to use inputValue()function
    // await page.pause();


})

