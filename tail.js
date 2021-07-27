const assertEqual = require('./assertEqual');

const tail = arr => {
  if (!arr) {
    return undefined;
  }
  return arr.slice(1);
};

const words = ["Lighthouse", "Labs"];
assertEqual(words.length, 2);

const result = tail([1,2,3,4,5]);
assertEqual(result[0],2);


  
module.exports = tail;
