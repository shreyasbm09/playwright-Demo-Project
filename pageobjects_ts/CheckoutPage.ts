

import {expect, Locator, Page} from '@playwright/test'
export class CheckoutPage{


        page:Page
        productName:Locator
        countryCode:Locator
        placeOrderButton:Locator

    constructor(page: Page){
        this.page=page;
        this.productName = page.getByText('ZARA COAT 3');
        this.countryCode = page.getByPlaceholder('Select Country');
        this.placeOrderButton = page.getByText('Place Order');
    }


    async productNameValidation(productName:string){
            await expect(await this.productName ).toBeVisible();

    }

    async enterCredntialsAndPlaceOrder()
    {
  await this.countryCode.pressSequentially('Ind');
  await this.page.getByRole('button', { name: 'Ind' }).nth(1).click();
  await this.placeOrderButton.click();
     }
}
module.exports = {CheckoutPage}