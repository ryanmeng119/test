// utils.js
module.exports = function (browser) {
  this.goToGoogleMaximizeSite = function () {
    browser
    //.windowMaximize()
    .maximizeWindow()
    .url('http://yiwen-erp.example.com/users/sign_in#/')
    .waitForElementVisible('body', 1000);
    return browser;
  };
  return this;
};