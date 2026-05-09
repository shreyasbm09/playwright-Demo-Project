const base = require('@playwright/test');

exports.customTest = base.test.extend(
    {
        testDataForOrder:
        {
            username: "shr1@gmail.com",
            password: "Abcdefg123!",
            productName: "ZARA COAT 3"
        }
    }
)