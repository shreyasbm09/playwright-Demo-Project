//const {LoginPage} =require('./LoginPage');
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import {test, type Page, type Locator} from "@playwright/test";


export class POManager{

        page: Page
        loginPage: LoginPage;
        dashboardPage: DashboardPage;
        cartPage: CartPage;
        checkOutPage: CheckoutPage;
    constructor(page:any){

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