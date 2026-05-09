import {test,Page,Locator, expect} from '@playwright/test'


export class DashboardPage
{


      page: Page
      products: Locator
      productsText:Locator

constructor(page: Page)
{
    this.page = page;
  this.products = page.locator('.card-body');
  this.productsText =   page.locator('.card-body b');

}

async searchAndOrderProduct(productName: string)
{ 

    const allTitles = await this.productsText.allTextContents();// grabs all the titles 
   console.log(allTitles);
   const count = await this.products.count();
   console.log(count);
   
   for(let i=0;i<count;i++){
    const title = await  this.products.nth(i).locator('b').textContent();
    if(title === productName){
     await this.products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

}

async navigateToCart(){
      await  this.page.locator("[routerlink*='cart']").click();
      await this.page.locator('div li').first().waitFor();

}

}

module.exports = {DashboardPage}