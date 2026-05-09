class APIUtils
{

    constructor(apiContext,loginPayload){
        this.apiContext = apiContext;
        this.loginPayload= loginPayload;
    }


    async getToken(){

        const loginResponse = await  this.apiContext
                .post('https://rahulshettyacademy.com/api/ecom/auth/login',
                {
                    data:this.loginPayload
                }
            );
            const  loginResponseJson = await loginResponse.json();
            const token = loginResponseJson.token;
            console.log(token);
            return token;
    }

    async createOrder(orderPlayload){
        let response = {};
        response.token = await this.getToken();

         const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data:orderPlayload,
            headers: {
                'Authorization' : response.token,
                'content-type' : 'application/json'
            }
        }
      );
    const orderResponseJson = await orderResponse.json();
 //   console.log(orderResponseJson);
    const orderId = await orderResponseJson.orders[0]; 
    response.orderId = orderId
    return response;
    }


}
module.exports ={APIUtils};