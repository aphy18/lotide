const head = require('./head'); // regular for head
const tail = require('./tail').tail; // object format for tail
const middle = require('./middle').middle; // I used object format for middle


const manipulateArray = { // in ES6, if key = value, just put the key name
    head,
    tail,
    middle
}


console.log(manipulateArray)
