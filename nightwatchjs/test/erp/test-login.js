var utils = require('./utils');

module.exports = {
    tags: ['login2'],
    'Open mix the website': function(browser) {
        utils(browser).goToGoogleMaximizeSite()
        browser.end();
    },
    // 'Subway Login Page': function(browser) {
    //     browser
    //         .url('http://subway.onead.com.tw/')
    //         .waitForElementVisible('body', 1000)
    //         .waitForElementPresent('.navbar')
    //         .waitForElementPresent('#main')
    //         .assert.urlEquals('http://subway.onead.com.tw/sign_in#/')
    //         .assert.title('OneAD企業資源管理系統')

    //     .assert.elementPresent("#logo > a[href='http://subway.onead.com.tw/']")
    //         .assert.containsText('a', 'ERP')
    //         .click(".navbar-brand")
    //         .saveScreenshot('screenshots' + '/subway login page.png')

    //     .assert.elementPresent('.form-signin-heading')
    //         .assert.visible('input[type=text]')
    //         .assert.visible('input[type=password]')
    //         .assert.visible('input[type=submit]')

    //     .assert.containsText('h2', '請先登入')

    //     .assert.containsText('p', '') // 登入失敗訊息！(登入失敗前)
    //         .setValue('input[type=text]', 'admin@gmail.com')
    //         .setValue('input[type=password]', 'GuoShiIsOnead')
    //         .click('[value=登入]')
    //         .assert.containsText('p', '登入資訊錯誤') // 登入失敗訊息！(登入失敗後)
    //         .assert.cssProperty('p', 'color', 'rgba(255, 0, 0, 1)') // 登入失敗訊息!(文字屬性)
    //         .saveScreenshot('screenshots' + '/login failed.png')

    //     .setValue('input[type=text]', 'kennykuo@onead.com.tw')
    //         .setValue('input[type=password]', 'GuoShiIsOnead')
    //         .click('[value=登入]')
    //         .saveScreenshot('screenshots' + '/success.png')
    //         .pause(1000)
    //         .end();
    // },
    // 'OneAD 企業管理系統 Page': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '45')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .assert.elementPresent("#logo > .navbar-brand")
    //         .assert.attributeEquals('#logo > a', 'href', 'http://tony-erp.example.com/')

    //     .assert.containsText('h1', 'OneAD 企業資源管理系統')
    //         .assert.elementPresent('button[type=button]')
    //         .assert.elementPresent('.dropdown-menu')
    //         .assert.elementPresent('.dropdown-header')
    //         .assert.elementPresent('ul > li:nth-child(2) > a')
    //         .assert.elementPresent('.divider')
    //         .assert.elementPresent('ul > li:nth-child(4) > a')
    //         .click('button[type=button]')
    //         .assert.containsText('.dropdown-header', '使用者設定')
    //         .assert.containsText('ul > li:nth-child(2) > a', '變更密碼')
    //         .assert.containsText('ul > li:nth-child(4) > a', '登出')
    //         .click("a[href='/users/edit']")
    //         .click("a[href='http://tony-erp.example.com/']")
    //         .click('button[type=button]')
    //         .click('a[data-method=delete]')
    //         .pause(1000)
    //         .end();
    // },

    // //----------------------- sales ---------------------------

    // '登入角色權限(sales)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '17')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login sales.png')
    //         .end();
    // },
    // '登入角色權限(sales_director)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '9')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login sales_director.png')
    //         .end();
    // },
    // '登入角色權限(sales_manager)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '17') // 暫填'17'
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login sales_manager.png')
    //         .end();
    // },

    // //-------------------- adops -------------------- 

    // '登入角色權限(adops_onead)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '29')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login adops_onead.png')
    //         .end();
    // },

    // '登入角色權限(adops_gf)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '39')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login adops_gf.png')
    //         .end();
    // },

    // '登入角色權限(adops_manager)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '16')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login adops_manager.png')
    //         .end();
    // },

    // //-------------------- 財務 ----------------------

    // '登入角色權限(accounting)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '42')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementNotPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementPresent('[ui-sref=billing]')
    //         .verify.elementPresent("[ui-sref='reports.all']")
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login accounting.png')
    //         .end();
    // },

    // '登入角色權限(invoicing_ar)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '60')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login invoicing_ar.png')
    //         .end();
    // },

    // '登入角色權限(invoicing_ap)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '55')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login invoicing_ap.png')
    //         .end();
    // },

    // '登入角色權限(cashier)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '43')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login cashier.png')
    //         .end();
    // },

    // // -------------------- management ----------------------

    // '登入角色權限(management)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '12')
    //         .click('[value=快速登入]')
    //         .pause(2000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementPresent("[ui-sref='reports.all']")
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login management.png')
    //         .end();
    // },

    // //-------------------- eco_system --------------------

    // '登入角色權限(publisher_manager)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '24')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login publisher_manager.png')
    //         .end();
    // },

    // '登入角色權限(marketing)': function(browser) {
    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '24')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login marketing.png')
    //         .end();
    // },

    // //-------------------- rd --------------------
    // '登入角色權限(rd-qa)': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '45')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login rd-qa.png')
    //         .end();
    // },
    // '登入角色權限(rd-network)': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '28')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login rd-network.png')
    //         .end();
    // },
    // '登入角色權限(rd-manager)': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '4')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementPresent('[ui-sref=materials]')
    //         .verify.elementPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login rd-manager.png')
    //         .end();
    // },
    // '登入角色權限(rd_programmatic)': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '66')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementNotPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementNotPresent('#agency')
    //         .verify.elementNotPresent('#third_party_company')
    //         .verify.elementNotPresent('#client')
    //         .verify.elementNotPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementNotPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login rd_programmatic.png')
    //         .end();
    // },

    // //-------------------- HR --------------------

    // '登入角色權限(hr_manager)': function(browser) {

    //     browser
    //         .maximizeWindow()
    //         .url('http://tony-erp.example.com/users/sign_in#/')
    //         .waitForElementPresent('body', 1000)
    //         .clearValue('input[type=text]')
    //         .setValue('input[type=text]', '43')
    //         .click('[value=快速登入]')
    //         .pause(1000)
    //         .verify.elementPresent('#campaign')
    //         .verify.elementPresent('#program_buy')
    //         .verify.elementPresent('#media')
    //         .verify.elementPresent('#agency')
    //         .verify.elementPresent('#third_party_company')
    //         .verify.elementPresent('#client')
    //         .verify.elementPresent('[ui-sref=billing]')
    //         .verify.elementNotPresent('[ui-sref=reports.all]')
    //         .verify.elementNotPresent('[ui-sref=materials]')
    //         .verify.elementPresent('[ui-sref=system_management]')
    //         .saveScreenshot('screenshots' + '/login hr_manager.png')
    //         .end();
    // },
};