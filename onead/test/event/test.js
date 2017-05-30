module.exports = {
    tags: ['login2'],
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

        .assert.elementPresent('.form-signin-heading')
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

};