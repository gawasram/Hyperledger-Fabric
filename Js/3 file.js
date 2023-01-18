//Create 3 javascript files one.js two.js and three.js and use module, require keywords to use the first 2 files within the 3rd one.

one.js:
const message1 = "This is message from file one";

module.exports = message1;

two.js:
const message2 = "This is message from file two";

module.exports = message2;

three.js:
const message1 = require('./one');
const message2 = require('./two');

console.log(message1);
console.log(message2);