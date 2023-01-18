//Write the javascript program for the below given description.
//Imagine that a user is placing an order from some online shopping platform like blinkit, for which the user needs to interact with the database.
//Mock the functionality of interacting with the database using the setTimeout() method.

//Assume that the new order ID is created after 4 seconds. 
//Consider this exercise as creating an order ID in DB. Also, assume that the order ID, which is assigned after 4 seconds, is 001 and creating it takes 4 seconds. 
//After 2 seconds, you need to print the following message on the screen:
//Order placed successfully with order ID = 001.
//Do not forget to use a callback to display the above message to the user.

function createOrderID(callback) {
    setTimeout(() => {
        let orderID = "001";
        callback(orderID);
    }, 4000);
}

createOrderID(function (orderID) {
    setTimeout(() => {
        console.log("Order placed successfully with order ID = " + orderID + ".");
    }, 2000);
});