// include the methods in the module
// addItem 
function addItem (cart, item, quantity) {
    if (typeof cart !=='object') {
        return cart; 
    }
    if (cart === null) { 
        return cart; 
    }
    if (typeof item !== 'string') {
        return cart;
    }
    if (typeof quantity !== 'number') {
        return cart;
    }
    if (quantity <= 0) {
        return cart; 
    }
    
    if (cart[item]===undefined) {
        cart[item] = quantity;
    } else {
        cart[item] = cart[item] + quantity;     
    }
    return cart;
}
    
function removeItem (cart, item) {
    if (typeof cart !=='object') {
        return cart; 
    }
    if (typeof item !== 'string') {
        return cart;
    }
    delete cart[item];
    return cart;
}

function getTotalItems (cart) {
    if (typeof cart !=='object') {
        return 0;
    }

    return cart; 
}; 

module.exports = { addItem, removeItem, getTotalItems };

const cart = {};
// add items
addItem(cart, 'apple', 2);
addItem(cart, 'banana', 3);
addItem(cart, 'strawberry', 6);
addItem(cart, 'apple', 1);
addItem(cart, 'chips', 0);
// remove an item 
removeItem(cart, 'apple', 1);
console.log(cart); // { apple: 2, banana: 3 }
