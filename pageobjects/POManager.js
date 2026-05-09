const {LoginPage} =require('./LoginPage');
const {DashboardPage} =require('./DashboardPage');
const {CartPage} =require('./CartPage');
const {CheckoutPage} =require('./CheckoutPage');


class POManager{

    constructor(page){

    this.page =page
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.cartPage = new CartPage(page);
    this.checkOutPage = new CheckoutPage(page);
    
    }

    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getCheckoutPage(){
        return this.checkOutPage;
    }
}
module.exports = {POManager}