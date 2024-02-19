function log_event(msg) {
    let d = new Date().toLocaleString('en-GB', {
        timeZone: 'UTC'
    })
    console.log(`[${d}] c[●┬●]> ${msg}.`)
}

function addRatio(pwr, bonus, cost) {
    try {
        cards = document.getElementsByClassName('marketplace-buy-item-card')
        let titleColor = "#D8FFDB"
        let valueColor = "lightGreen"
        for ( i = 0; i < cards.length; i++ ) {            
            if ( cards[i].href.includes('miner') ) {

                // Processing miner bonuses
                var minerPrice = parseFloat(cards[i].getElementsByClassName('item-price')[0].textContent)
                var minerBonusPercentage = parseFloat(cards[i].getElementsByClassName('item-addition-bonus')[0].textContent.split('%')[0])                
                var rackPrice = parseFloat(cost)
                var currentPower = parseFloat(pwr)
                var rackBonusPercentage = parseFloat(bonus)
                var minerPower = cards[i].getElementsByClassName('item-addition-power')[0].textContent.split(' ')
                var units = { 'Gh/s': 1000, 'Th/s': 1, 'Ph/s': 1000000 }
                var divisor = units[minerPower[2]]
                minerPower = parseFloat(minerPower[0]) / divisor                
                var minerBonusPower = 0
                if (minerBonusPercentage > 0){
                    minerBonusPower = (currentPower + minerPower) * (minerBonusPercentage / 100)
                }
                var rackBonusPower = minerPower * (rackBonusPercentage / 100)                
                var totalAdditionalPower = (rackBonusPower + minerBonusPower + minerPower) / divisor
                var ratio = (totalAdditionalPower / (minerPrice + rackPrice))

                // Updating page content with processed miner bonuses
                var priceWrapper = cards[i].getElementsByClassName('item-price-wrapper')[0]
                var ratioTitleNode = document.createElement('p')
                ratioTitleNode.classList.add('item-price-label')
                ratioTitleNode.style.color = titleColor
                var ratioTitleTextNode = document.createTextNode('Ratio')
                ratioTitleNode.appendChild(ratioTitleTextNode)
                priceWrapper.appendChild(ratioTitleNode)

                var ratioValueNode = document.createElement('p')
                ratioValueNode.classList.add('item-price')
                ratioValueNode.style.color = valueColor
                var ratioValueTextNode = document.createTextNode(ratio.toFixed(3)+" Th/s/RLT")
                ratioValueNode.appendChild(ratioValueTextNode)
                priceWrapper.appendChild(ratioValueNode)

                var powerTitleNode = document.createElement('p')
                powerTitleNode.classList.add('item-price-label')
                powerTitleNode.style.color = titleColor
                var powerTitleTextNode = document.createTextNode('🢅 Power')
                powerTitleNode.appendChild(powerTitleTextNode)
                priceWrapper.appendChild(powerTitleNode)

                var powerValueNode = document.createElement('p')
                powerValueNode.classList.add('item-price')
                powerValueNode.style.color = valueColor
                var powerValueTextNode = document.createTextNode("+ "+totalAdditionalPower.toFixed(3)+" Th/s")
                powerValueNode.appendChild(powerValueTextNode)
                priceWrapper.appendChild(powerValueNode)
            }
        }
    } catch (error) {
        log_event(error)
    }
}