const assertEqual = require('./test/assertEqualTest.test.js');

const tail = arr => {
  if (!arr) {
    return undefined;
  }
  return arr.slice(1);
};

//in JS two different arrays will never be equal to each other due to them having different "addresses"


const words = ["Lighthouse", "Labs"];
assertEqual(words.length, 2);

const result = tail([1,2,3,4,5]); // saving the function inside a variable
assertEqual(result[0],2);


  
module.exports = tail;
