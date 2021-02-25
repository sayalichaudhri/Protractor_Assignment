import{browser,element,by} from "protractor"

export class loginpage{

    public uname=element(by.id('mat-input-0'));
    public pass=element(by.id('mat-input-1'));
  public login=element(by.buttonText('Login'));



    async setUsername(user:string)
    {
        this.uname.sendKeys(user);

    }

    async setPassword(password:string)
    {
        this.pass.sendKeys(password);

    }

    async clickOnLogin()
    {
        this.login.click();
    }





}