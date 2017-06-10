module.exports = {

    'Subway Login Page': function(browser) {
        console.log(browser);
        browser
            .resizeWindow(1240, 725)
            .url('http://staging.onead.com.tw/ov_player/preview/11351/950/390')
            .waitForElementVisible('ONEAD_player_wrapper')
            .assert.elementPresent('#div-incover-ad')
            .assert.elementPresent('#ONEAD_fade')
            .assert.elementPresent('body > div:nth-child(3)')
            .assert.elementPresent('#div-onead-ad')


        .end();
    },

};