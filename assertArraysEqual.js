function assertArraysEqual(arr1, arr2) {
  let value = true;
  if (arr1.length !== arr2.length) {
    value = false;
  }
  arr1.forEach((element,index) => {
    if (element !== arr2[index]) {
      value = false;
    }
  });

  if (value === true) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are not equal.");
  }
}

assertArraysEqual([1,2,4],[1,2,4]);

module.exports = {
  assertArraysEqual
};
