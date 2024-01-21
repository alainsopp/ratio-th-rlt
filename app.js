function log_event(msg) {
    let d = new Date().toLocaleString('en-GB', {
        timeZone: 'UTC'
    })
    console.log(`[${d}] c[●┬●]> ${msg}.`)
}

function addRatio() {
    try {        
        cards = document.getElementsByClassName('marketplace-buy-item-card')        
        for (i = 0; i < cards.length; i++) {
            var imageTag = cards[i].getElementsByTagName('img')            
            if (imageTag[0].src.includes('miners')) {                
                price = parseFloat(cards[i].getElementsByClassName('item-price')[0].textContent)
                power = cards[i].getElementsByClassName('item-addition-power')[0].textContent.split(' ')
                mul = { 'Gh/s': 1, 'Th/s': 1000, 'Ph/s': 1000000 }
                unit = mul[power[2]]
                power = parseFloat(power[0]) * unit
                ratio = (power / price) / 1000
                console.log(ratio)
            }            
        }        
    } catch (error) {
        log_event(error)
    }
}