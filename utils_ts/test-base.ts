//const base = require('@playwright/test');
import {test as baseTest} from '@playwright/test';

interface TestDataForOrder{
    username:String;
    password:String;
    productName: String;
}

       
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
    {
        testDataForOrder:
        {
            username: "shr1@gmail.com",
            password: "Abcdefg123!",
            productName: "ZARA COAT 3"
        }
    }
)