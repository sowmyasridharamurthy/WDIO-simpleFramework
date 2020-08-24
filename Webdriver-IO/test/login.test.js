const loginpage = require('../page/loginpage');
const { assert } = require('chai');

describe('login page feature test',function(){

    it('verify login page title',function(){
    browser.url('/')
    browser.maximizeWindow();
    const title = loginpage.getPageTitle()
    console.log(title)
    assert.equal('HubSpot Login',title,'title is not found' )

    })

})