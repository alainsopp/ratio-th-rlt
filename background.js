browser.runtime.onMessage.addListener((message) => {
    if (message.command === 'buttonClicked') {  
        browser.tabs.executeScript({
            code: `addRatio(${message.power},${message.bonus},${message.cost});`
        });
    }
})