const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  let value = true;
  if (arr1.length !== arr2.length) {
    value = false;
  }
  arr1.forEach((element,index) => {
    if (element !== arr2[index]) {
      value = false;
    }
  });
  console.log(value)
  return value;
};

assertEqual(eqArrays([1,2,3],[1,2,3,4]), false);
assertEqual(eqArrays([2,4,6],[2,4,6]), true);

module.exports = eqArrays;