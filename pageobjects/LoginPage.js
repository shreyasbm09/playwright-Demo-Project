class LoginPage{

    constructor(page)
    {
            this.page = page;
            this.signInButton = page.getByRole("button", { name: 'Login' });
            this.userName  = page.getByPlaceholder("email@example.com");
            this.password = page.getByPlaceholder("enter your passsword");

    }

    async goTo()
    {
          await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(userName,passsword){
         await this.userName.fill(userName);
         await this.password.fill(passsword);
         await this.signInButton.click();
         await this.page.waitForLoadState('networkidle');
        await this.page.locator('.card-body b').first().waitFor();
    }
}

module.exports = {LoginPage};