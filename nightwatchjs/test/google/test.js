var utils = require('./utils');

module.exports = {
    '@tags': ['Google-Test'],
    'Open mix the website': function(browser) {
        utils(browser).goToGoogleMaximizeSite()
        browser.end();
    },
    'Subway Login Page': function(browser) {
        browser
            .url('http://subway.onead.com.tw/')
            .waitForElementVisible('body', 1000)
            .waitForElementPresent('.navbar')
            .waitForElementPresent('#main')
            .assert.urlEquals('http://subway.onead.com.tw/sign_in#/')
            .assert.title('OneAD企業資源管理系統')

        .assert.elementPresent("#logo > a[href='http://subway.onead.com.tw/']")
            .assert.containsText('a', 'ERP')
            .click(".navbar-brand")
            .saveScreenshot('screenshots' + '/subway login page.png')

        .assert.visible('.form-signin-heading')
            .assert.visible('input[type=text]')
            .assert.visible('input[type=password]')
            .assert.visible('input[type=submit]')

        .assert.containsText('h2', '請先登入')

        .assert.containsText('p', '') // 登入失敗訊息！(登入失敗前)
            .setValue('input[type=text]', 'admin@gmail.com')
            .setValue('input[type=password]', 'GuoShiIsOnead')
            .click('[value=登入]')
            .assert.containsText('p', '登入資訊錯誤') // 登入失敗訊息！(登入失敗後)
            .assert.cssProperty('p', 'color', 'rgba(255, 0, 0, 1)') // 登入失敗訊息!(文字屬性)
            .saveScreenshot('screenshots' + '/login failed.png')

        .setValue('input[type=text]', 'kennykuo@onead.com.tw')
            .setValue('input[type=password]', 'GuoShiIsOnead')
            .click('[value=登入]')
            .saveScreenshot('screenshots' + '/success.png')
            .pause(1000)
            .end();
    },
    'OneAD 企業管理系統 Page': function(browser) {

        browser
            .maximizeWindow()
            .url('http://yiwen-erp.example.com/users/sign_in#/')
            .waitForElementPresent('body', 1000)
            .clearValue('input[type=text]')
            .setValue('input[type=text]', '45')
            .click('[value=快速登入]')
            .pause(1000)
            .assert.elementPresent("#logo > .navbar-brand")
            .assert.attributeEquals('#logo > a', 'href', 'http://yiwen-erp.example.com/')

        .assert.containsText('h1', 'OneAD 企業資源管理系統')
            .assert.elementPresent('button[type=button]')
            .assert.elementPresent('.dropdown-menu')
            .assert.elementPresent('.dropdown-header')
            .assert.elementPresent('ul > li:nth-child(2) > a')
            .assert.elementPresent('.divider')
            .assert.elementPresent('ul > li:nth-child(4) > a')
            .click('button[type=button]')
            .assert.containsText('.dropdown-header', '使用者設定')
            .assert.containsText('ul > li:nth-child(2) > a', '變更密碼')
            .assert.containsText('ul > li:nth-child(4) > a', '登出')
            .click("a[href='/users/edit']")
            .click("a[href='http://yiwen-erp.example.com/']")
            .click('button[type=button]')
            .click('a[data-method=delete]')
            .pause(1000)
            .end();
    },
    '登入角色權限(RD-QA)': function(browser) {

        browser
            .maximizeWindow()
            .url('http://yiwen-erp.example.com/users/sign_in#/')
            .waitForElementPresent('body', 1000)
            .clearValue('input[type=text]')
            .setValue('input[type=text]', '45')
            .click('[value=快速登入]')
            .pause(1000)
            .verify.elementPresent('#campaign')
            .verify.elementNotPresent('#program_buy')
            .verify.elementPresent('#media')
            .verify.elementNotPresent('#agency')
            .verify.elementNotPresent('#third_party_company')
            .verify.elementNotPresent('#client')
            .verify.elementNotPresent('[ui-sref=reports.all]')
            .verify.elementNotPresent('[ui-sref=materials]')
            .verify.elementNotPresent('[ui-sref=system_management]')
            .click('button[type=button]')
            .click('a[data-method=delete]')
            .pause(1000)
            .end();
    },
};