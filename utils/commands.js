import SharedPageComponents from "../test/pageObjects/automation-test-store/components/shared-page-components.comp";

module.exports = {
  waitThenClick: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

  waitThenGetText: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    let text = await element.getText();
    return text;
  },

  waitThenSetValue: async function (element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  },

  waitThenClickProduct: async function (productName) {
    const element = $(`//*[@title='${productName}']`);
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.click();
  },

  waitThenMoveTo: async function (element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    await element.scrollIntoView();
    await element.isDisplayed();
    await element.moveTo();
  },

  clickItemIfInStock() {
    const element = SharedPageComponents.addToCartBtnSub;
    if (element) {
      element.waitForExist();
      element.waitForDisplayed();
      element.click();
    } else {
      console.log("Item out of stock");
    }
  },
};
