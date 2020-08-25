const config = require('../config');
const expect = require('chai').expect;
const searchpage = require('../page/searchpage');

describe('Search the  application',function(){


    it('verify valid search',function(){
        browser.url('/')
        browser.maximizeWindow()
        searchpage.doSearch('Dress')

        const mssg1 = searchpage.checkResult()
        expect(mssg1).to.include('Showing')
    
        })

})

