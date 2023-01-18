//Write the javascript program for the below given description.
//You need to write functions for adding an item to the cart and removing an item from the cart. Initially, the cart contains 0 items.
//When a user calls the addItem() function, an item is added to the cart and the number of items in the cart increases by 1.
//When a user calls the removeItem() function, an item is removed from the cart and the number of items in the cart decreases by 1.

//You can consider this scenario-
//addItem();
//removeItem();
//addItem();
//removeItem();
let cart = {
    items: 0,
    addItem: function() {
        this.items++;
        console.log("Item added to the cart. Total items: " + this.items);
    },
    removeItem: function() {
        if (this.items > 0) {
            this.items--;
            console.log("Item removed from the cart. Total items: " + this.items);
        } else {
            console.log("Cart is empty. Please add an item first.");
        }
    }
};

cart.addItem();
cart.removeItem();
cart.addItem();
cart.removeItem();