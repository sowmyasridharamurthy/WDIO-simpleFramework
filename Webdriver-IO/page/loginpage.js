const elementUtil = require('../util/elementUtil');
const { doIsDisplayed } = require('../util/elementUtil');

class loginPage {

    //locators
        get useranme() {return $('#username')}
        get password() {return $('#password')}
        get lgnBtn() {return $('#loginbtn')}
        get signUpBtn() {return $('=Sign up')}

        //actions
        getPageTitle(pageTitle){
            
           return  elementUtil.doGetTitle('HubSpot Login')
        }

        isSignUpLinkExist(){
            return elementUtil.doIsDisplayed(this.signUpBtn)
        }

        doLogin(emailID, pwd){

            elementUtil.doSetValue(this.useranme, emailID)
            elementUtil.doSetValue(this.password,pwd)
            elementUtil.doClick(this.lgnBtn)
        }


}
module.exports = new loginPage()