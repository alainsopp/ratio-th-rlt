# Rollercoin marketplace info enhancer

## A firefox extension to help rollercoin players to know miners power over cost ratio directly on marketplace page.

This extension add a new information about the miners that are 
showed in the market place.  

When browsering the marketplace, several categories of items are displayed.  
We can find miners of course, batteries, parts and racks.  

All those categories of items has properties like price and quantity but only miners has a property named Power.  
This property refers to the amount of hash power that is provided by the miner.  

This extension add new property named `Ratio`.  
This property is expressing the ratio of the miner cost over the miner power.  

For instance if a miner has a hash power of `100 Gh/s` and costs `0.04557 RLT`,  
the ratio value will be `2.194`.  
This number can be read as follow : 
For this miner, `1000 Gh/s` of hash power worth `2.194 RLT`.