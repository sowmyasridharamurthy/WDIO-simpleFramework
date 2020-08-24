const elementUtil = require('../util/elementUtil');
const { doIsDisplayed } = require('../util/elementUtil');

class loginPage {

    //locators
        get signinBtn() {return $('.header_user_info')}
        get useranme() {return $('#email')}
        get password() {return $('#passwd')}
        get lgnBtn() {return $('#SubmitLogin')}
        get errorMsg() {return $('.alert p')}
        

        isSignUpLinkExist(){
            return elementUtil.doIsDisplayed(this.signinBtn)
        }

        doLogin(emailID, pwd){

            elementUtil.doSetValue(this.useranme, emailID)
            elementUtil.doSetValue(this.password,pwd)
            elementUtil.doClick(this.lgnBtn)
        }

        checkMessage(element){
            return this.errorMsg.getText()
        }


}
module.exports = new loginPage()