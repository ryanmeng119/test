module.exports = (browser) => {
    return {
        goToMaximizeSite: () => {
            browser
                .maximizeWindow()
                .url('http://subway.onead.com.tw/users/sign_in#/')
                .waitForElementVisible('body', 1000)
            return browser;
        },
        goPage: () => {
            browser
                .resizeWindow(1240, 725)
                .url('http://subway.onead.com.tw/')
                .waitForElementPresent('.navbar', 'navbar ok!')
                .waitForElementPresent('#main', 'page ok!')
            return browser;
        },
        shouldAllElementPresent: () => {
            browser
                .assert.title('OneAD企業資源管理系統', 'page tittle ok')
                .assert.containsText("#logo > a[href='http://subway.onead.com.tw/']", 'ERP', 'logo ok!')
                .assert.containsText('h2', '請先登入', 'main page text ok!')
                .assert.elementPresent('input[type=email]', 'Account ok!')
                .assert.elementPresent('input[type=password]', 'Password ok!')
                .assert.elementPresent('input[type=submit]', 'login button ok!')
                .assert.containsText("#main > div.container > div > div > a[href='/users/password/new']", '忘記密碼？', 'forget password ok!')
                .assert.containsText('#flash-msg', '', 'login message ok')
            return browser;
        },
        logoUrl: () => {
            browser
                .click(".navbar-brand")
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', 'logo url OK')
            return browser;
        },
        loginFailNoAccount: () => {
            browser
                .setValue('input[type=password]', 'GuoShiIsOnead')
                .click('[value=登入]')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '登入失敗：未輸入帳號 OK')
            return browser;
        },
        loginFailNoPassword: () => {
            browser
                .setValue('input[type=email]', 'admin@gmail.com')
                .click('[value=登入]')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '登入失敗：未輸入密碼 OK')
            return browser;
        },
        accountPasswordError: () => {
            browser
                .setValue('input[type=email]', 'admin@gmail.com')
                .setValue('input[type=password]', 'GuoShiIsOnead')
                .click('[value=登入]')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '登入失敗：帳號密碼錯誤 OK')
            return browser;
        },
        loginSuccess: () => {
            browser
                .setValue('input[type=email]', 'ryanmeng@onead.com.tw')
                .setValue('input[type=password]', 'Jj34a8fd0b9')
                .click('[value=登入]')
                .assert.containsText('#flash-msg', '成功登入', '成功登入：帳密正確 OK')
                .assert.urlEquals('http://subway.onead.com.tw/#/', '登入後URL OK')
            return browser;
        }
    }
};