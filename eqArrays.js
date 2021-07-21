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

  return value;
}

// eqArrays([1,2,3],[1,2,3])

module.exports = {
  eqArrays
};