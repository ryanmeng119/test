module.exports = (browser) => {
    return {
        goPage: () => {
            browser
                .resizeWindow(1240, 725)
                .url('http://subway.onead.com.tw/users/sign_in#/')
                .waitForElementPresent('.navbar', 'navbar 載入確認')
                .waitForElementPresent('#main', 'main 載入確認')
            return browser;
        },
        shouldAllElementPresent: () => {
            browser
                .assert.elementPresent('#new_user > h2', 'h2文字載入確認')
                .assert.elementPresent('#user_email', '帳號欄位載入確認')
                .assert.elementPresent('#user_password', '密碼欄位載入確認')
                .assert.elementPresent('#submit', '登入按鈕載入確認')
                .assert.elementPresent('#main > div.container > div > div > a', '忘記密碼載入確認')
                .assert.elementNotPresent('#flash-msg', '警告訊息是否未載入')
            return browser;
        },
        shouldAllElementVisible: () => {
            browser
                .assert.title('OneAD企業資源管理系統', '網頁標題')
                .assert.visible('h2', '登入頁-h2文字顯示')
                .assert.containsText('h2', '請先登入', '登入頁-h2文字')
                .assert.visible('#user_email', '帳號輸入欄位顯示')
                .assert.attributeEquals('#user_email', 'placeholder', 'Email Address', '帳號輸入欄位-預設文字')
                .assert.visible('#user_password', '密碼輸入欄位顯示')
                .assert.attributeEquals('#user_password', 'placeholder', 'Password', '密碼輸入欄位-預設文字')
                .assert.visible('#submit', '登入按鈕顯示')
                .assert.attributeEquals('#submit', 'value', '登入', '按鈕名稱')
                .assert.visible('#main > div.container > div > div > a', '忘記密碼顯示')
                .assert.attributeEquals('#main > div.container > div > div > a', 'href', 'http://subway.onead.com.tw/users/password/new', '忘記密碼-連結')
            return browser;
        },
        logoElementPresentAndVisible: () => {
            browser
                .assert.elementPresent('#logo > a', 'logo載入確認')
                .assert.visible('#logo > a', 'Logo顯示')
                .assert.attributeEquals('#logo > a', 'href', 'http://subway.onead.com.tw/', 'Logo連結確認')
                .assert.containsText("#logo > a[href='http://subway.onead.com.tw/']", 'ERP', 'Logo連結文字確認')
            return browser;
        },

        logoFunction: () => {
            browser
                .click(".navbar-brand")
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', 'Logo點擊後位置確認')
            return browser;
        },
        loginFailNoAccount: () => {
            browser
                .setValue('#user_password', 'GuoShiIsOnead')
                .click('#submit')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '登入失敗位置確認')
                .assert.visible('#flash-msg', '警告訊息-顯示')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '警告訊息-文本1')
            return browser;
        },
        loginFailNoPassword: () => {
            browser
                .setValue('#user_email', 'admin@gmail.com')
                .click('#submit')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '登入失敗位置確認')
                .assert.visible('#flash-msg', '警告訊息-顯示')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '警告訊息-文本1')
            return browser;
        },
        accountPasswordError: () => {
            browser
                .setValue('#user_email', 'admin@gmail.com')
                .setValue('#user_password', 'GuoShiIsOnead')
                .click('#submit')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '登入失敗位置確認')
                .assert.visible('#flash-msg', '警告訊息-顯示')
                .assert.containsText('#flash-msg', '信箱或密碼是無效的。', '警告訊息-文本1')
            return browser;
        },
        loginSuccess: () => {
            browser
                .setValue('#user_email', 'ryanmeng@onead.com.tw')
                .setValue('#user_password', 'Jj34a8fd0b9')
                .click('#submit')
                .assert.urlEquals('http://subway.onead.com.tw/#/', '成功登入位置是否正確')
                .assert.visible('#flash-msg', '成功登入訊息-顯示')
                .assert.containsText('#flash-msg', '成功登入', '成功登入訊息-文字')
            return browser;
        },
        flashMessage: () => {
            browser
                .click('#logo > a')
                .assert.elementPresent('#flash-msg', '警告/成功 訊息載入確認')
                .assert.visible('#flash-msg', '警告訊息-顯示')
                .assert.visible('#flash-msg > button', '訊息關閉按鈕顯示')
                .assert.containsText('#flash-msg', '您需要先登入才能繼續。', '警告訊息-文本2')
                .waitForElementNotVisible('#flash-msg', 5000, '訊息收起：等待五秒')
                .assert.hidden('#flash-msg', '確認收起隱藏')
                .click('#logo > a')
                .click('#flash-msg > button')
                .assert.elementNotPresent('#flash-msg', '訊息收起：手動關閉')
            return browser;
        },
        goForgetPasswordPage: () => {
            browser
                .click('#main > div.container > div > div > a')
                .assert.urlEquals('http://subway.onead.com.tw/users/password/new#/', '進入忘記密碼頁面確認')
                .waitForElementPresent('.navbar', 'navbar 載入確認')
                .waitForElementPresent('#main', 'main 載入確認')
            return browser;
        },
        forgetPasswordPageElementPresent: () => {
            browser
                .assert.elementPresent('#main > div.container > div > div > h2', '忘記密碼頁面-h2文字載入')
                .assert.elementPresent('#user_email', '信箱輸入欄位載入確認')
                .assert.elementPresent('#new_user > div:nth-child(3) > input', '發送按鈕載入確認')
                .assert.elementPresent('#main > div.container > div > div > a', '返回登入頁連結載入確認')
            return browser;
        },
        forgetPasswordPageElementVisible: () => {
            browser
                .assert.visible('h2', '登入頁-h2文字顯示')
                .assert.containsText('h2', '忘記密碼？', '忘記密碼頁面-h2文字顯示')
                .assert.visible('#user_email', '信箱輸入欄位顯示')
                .assert.attributeEquals('#user_email', 'placeholder', 'Email Address', '信箱入欄位-預設文字')
                .assert.visible('#new_user > div:nth-child(3) > input', '發送按鈕顯示')
                .assert.attributeEquals('#new_user > div:nth-child(3) > input', 'value', '發送重置密碼信件給我', '發送按鈕名稱')
                .assert.visible('#main > div.container > div > div > a', '返回登入頁-顯示')
                .assert.attributeEquals('#main > div.container > div > div > a', 'href', 'http://subway.onead.com.tw/users/sign_in', '返回登入頁-連結')
            return browser;
        },
        notExistUserMail: () => {
            browser
                .setValue('#user_email', 'admin@gmail.com')
                .click('#new_user > div:nth-child(3)')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '確認是否回到登入頁')
                .assert.visible('#flash-msg', '訊息是否顯示')
                .assert.containsText('#flash-msg', '如果我們有您的信箱，您將會收到一封內含可重新設定密碼連結的電子郵件。', '提示訊息是否正確')
            return browser;
        },
        existUserMail: () => {
            browser
                .setValue('#user_email', 'ryanmeng@onead.com.tw')
                .click('#new_user > div:nth-child(3)')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '確認是否回到登入頁')
                .assert.visible('#flash-msg', '訊息是否顯示')
                .assert.containsText('#flash-msg', '如果我們有您的信箱，您將會收到一封內含可重新設定密碼連結的電子郵件。', '提示訊息是否正確')
            return browser;
        },
        returnToTheLoginPage: () => {
            browser
                .click('#main > div.container > div > div > a')
                .assert.urlEquals('http://subway.onead.com.tw/users/sign_in#/', '確認是否回到登入頁')
                .assert.elementNotPresent('#flash-msg', '確認是否未載入訊息欄')
            return browser;
        },

    }
};