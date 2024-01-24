function log_event(msg) {
    let d = new Date().toLocaleString('en-GB', {
        timeZone: 'UTC'
    })
    console.log(`[${d}] c[●┬●]> ${msg}.`)
}

function addRatio() {
    try {
        cards = document.getElementsByClassName('marketplace-buy-item-card')
        for ( i = 0; i < cards.length; i++ ) {            
            if ( cards[i].href.includes('miner') ) {
                price = parseFloat(cards[i].getElementsByClassName('item-price')[0].textContent)
                power = cards[i].getElementsByClassName('item-addition-power')[0].textContent.split(' ')
                mul = { 'Gh/s': 1, 'Th/s': 1000, 'Ph/s': 1000000 }
                unit = mul[power[2]]
                power = parseFloat(power[0]) * unit
                ratio = (power / price) / 1000

                var priceWrapper = cards[i].getElementsByClassName('item-price-wrapper')[0]
                var ratioTitleNode = document.createElement('p')
                ratioTitleNode.classList.add('item-price-label')
                var textNode = document.createTextNode('Ratio')
                ratioTitleNode.appendChild(textNode)
                priceWrapper.appendChild(ratioTitleNode)

                ratioValueNode = document.createElement('p')
                ratioValueNode.classList.add('item-price')
                ratioValueNode.style.color = "lightgreen"
                textNode = document.createTextNode(ratio.toFixed(3))
                ratioValueNode.appendChild(textNode)
                priceWrapper.appendChild(ratioValueNode)
            }
        }
    } catch (error) {
        log_event(error)
    }
}