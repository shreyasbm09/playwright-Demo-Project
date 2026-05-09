import {test, expect} from '@playwright/test';
import { POManager } from '../pageobjects_ts/POManager';
import {customTest} from '../utils_ts/test-base';


//JSON->String->JS Object
const dataSet =  JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));


for(const data of dataSet){

test(`Client App Login for username ${data.username}`, async ({ page }) => {
 // const products = page.locator('.card-body');
 const poManager =  new POManager(page);
const loginPage = poManager.getLoginPage();
const dashboardPage = poManager.getDashboardPage();
const cartPage = poManager.getCartPage();
const checkOutPage = poManager.getCheckoutPage();

  await loginPage.goTo();
  await loginPage.validLogin(data.username,data.password);
  await dashboardPage.searchAndOrderProduct(data.productName);
  await dashboardPage.navigateToCart();
  await cartPage.verifyProduct();
  await cartPage.naviagteToCheckout();
  await checkOutPage.productNameValidation('ZARA COAT 3');
  await checkOutPage.enterCredntialsAndPlaceOrder();
  await expect(page.getByText('Thankyou for the order.')).toBeVisible();
});
}

customTest("@Web Client App Login for username", async ({ page,testDataForOrder }) => {
 // const products = page.locator('.card-body');
 const poManager =  new POManager(page);
const loginPage = poManager.getLoginPage();
const dashboardPage = poManager.getDashboardPage();
const cartPage = poManager.getCartPage();
const checkOutPage = poManager.getCheckoutPage();

  await loginPage.goTo();


  await loginPage.validLogin(testDataForOrder.username.toString(),testDataForOrder.password.toString());
  await dashboardPage.searchAndOrderProduct(testDataForOrder.productName.toString());
  await dashboardPage.navigateToCart();
  await cartPage.verifyProduct();
  await cartPage.naviagteToCheckout();
  await checkOutPage.productNameValidation(testDataForOrder.productName.toString());
  await checkOutPage.enterCredntialsAndPlaceOrder();
  await expect(page.getByText('Thankyou for the order.')).toBeVisible();
});





