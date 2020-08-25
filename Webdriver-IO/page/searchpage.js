const expect = require('chai').expect;
const elementUtil = require('../util/elementUtil');

class searchpage {

    //locators
        get searchTxt() {return $('#search_query_top')}
        get srchBtn() {return $('.button-search')}
        get searchResult() {return $('.product-count')}
        

        doSearch(srchTxt){

            elementUtil.doSetValue(this.searchTxt, srchTxt)
            elementUtil.doClick(this.srchBtn)
        }

        checkResult(element){
            
            return this.searchResult.getText()
            
        }


}
module.exports = new searchpage();