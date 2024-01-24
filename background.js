browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        code: `addRatio();`
    });
});