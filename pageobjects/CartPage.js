const {expect} = require('@playwright/test');

class CartPage{

    constructor(page){
        this.page = page;
         this.productName = page.getByText('ZARA COAT 3');
         this.checkOutButton = page.getByRole('button', { name: 'Checkout' })  
    }

    async verifyProduct(){
            await expect(await this.productName).toBeVisible();
        }

        async naviagteToCheckout(){
             await this.checkOutButton.click();
             
        }

}
module.exports = {CartPage}