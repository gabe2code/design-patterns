import Item from './Item.ts';

/**
 * Imagine several NPC that drop the same item, we will need the same item with different instances to be used by different users, 
 * so the clone function will help us to reproduce the same item
 */
let commonWapon = new Item(1234);
let clonedWapon = commonWapon.clone(1234);

console.log(commonWapon, clonedWapon === commonWapon);
