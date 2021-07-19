const assertEqual = require('./assertEqual');


function head(arr) {
  if (!arr) {
    return undefined;
  }
  return arr[0];
}
    

head(["Rafee","Aphy","Abdi"]);

module.exports = head;

// assertEqual(head,head)