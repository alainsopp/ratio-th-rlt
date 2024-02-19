var rackCost = document.getElementById('cost').value
var currentPower = document.getElementById('current').value
var rackBonus = document.getElementById('rackbonus').value
document.getElementById('enhance').addEventListener('click', () => {    
    browser.runtime.sendMessage({
        command : 'buttonClicked', 
        power   : currentPower, 
        bonus   : rackBonus, 
        cost    : rackCost 
    });
});