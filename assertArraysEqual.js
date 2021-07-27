const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are not equal.");
  }
};

assertArraysEqual([1,2,4],[1,2,4,11]);

module.exports = assertArraysEqual;

