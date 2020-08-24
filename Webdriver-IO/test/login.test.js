const loginpage = require('../page/loginpage');
const config = require('../config');
const { assert } = require('chai');
const { signinBtn } = require('../page/loginpage');

describe('login credential test-invalid credentils',function(){

    it('verify login details',function(){
    browser.url('/')
    browser.maximizeWindow()
    loginpage.signinBtn.click()
    loginpage.doLogin(config.username, config.password)
    const mssg = loginpage.checkMessage()
    assert.equal('There is 1 error',mssg,'There was no error' )

    })

})