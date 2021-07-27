const assertEqual = require('./assertEqual');

const head = arr => {
  if (!arr) {
    return undefined;
  }
  return arr[0];
};

assertEqual(head([1,2,3]),1);

module.exports = head;
