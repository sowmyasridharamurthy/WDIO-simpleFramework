class ElementUtil{

doClick(element){
    element.waitForDisplayed()
element.click()
}

doSetValue(element,value){
    element.waitForDisplayed()
    element.setValue(value)
}

doGetText(element){
   element.waitForDisplayed()
   return element.getText()
}

doIsDisplayed(element){
    element.waitForDisplayed()
   return element.isDisplayed()
}

doGetTitle(pageTitle){
    browser.waitUntil(function(){
        return (browser.getTitle() === 'HubSpot Login')
    },10000, 'title not found')

    return browser.getTitle()
}
}
module.exports = new ElementUtil()