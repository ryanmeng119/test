module.exports = {
    '檢查登錄頁面：標題、頁面元件 - 載入與顯示': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().shouldAllElementPresent()
            .page.utils().shouldAllElementVisible()
            .end();
    },
    '檢查登錄頁面：Logo 載入.顯示.功能': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().logoElementPresentAndVisible()
            .page.utils().logoFunction()
            .end();
    },
    '檢查登錄頁面：訊息': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().flashMessage()
            .end();
    },
    '檢查登錄頁面：登入失敗': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().loginFailNoAccount()
            .page.utils().loginFailNoPassword()
            .page.utils().accountPasswordError()
            .saveScreenshot('screenshots' + '/login failed.png')
            .end();
    },
    '檢查登錄頁面：登入成功': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().loginSuccess()
            .saveScreenshot('screenshots' + '/success.png')
            .end();
    },
    '檢查忘記密碼頁面:頁面元件載入與顯示': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().goForgetPasswordPage()
            .page.utils().logoElementPresentAndVisible()
            .page.utils().forgetPasswordPageElementPresent()
            .page.utils().forgetPasswordPageElementVisible()
            .end();
    },
    '檢查忘記密碼頁面:輸入錯誤信箱': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().goForgetPasswordPage()
            .page.utils().notExistUserMail()
            .end();
    },
    //----- 輸入正確信箱後發送異常,暫不測試這塊 -----
    // '檢查忘記密碼頁面:輸入正確信箱': function(browser) {
    //     browser
    //         .page.utils().goPage()
    //         .page.utils().goForgetPasswordPage()
    //         .page.utils().existUserMail()
    //         .end();
    // },
    '檢查忘記密碼頁面:點擊登入返回登入頁': function(browser) {
        browser
            .page.utils().goPage()
            .page.utils().goForgetPasswordPage()
            .page.utils().returnToTheLoginPage()
            .end();
    },

    // 'OneAD 企業管理系統 Page': function(browser) {

    //     browser
    //         .page.utils().goPage()
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