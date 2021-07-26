const middle = arr => {
  const newArr = [];
  const middleIndex = Math.floor((arr.length / 2));
  if (arr.length % 2 === 0) {
    newArr.push(arr[middleIndex - 1], arr[middleIndex]);
  } else {
    newArr.push(arr[middleIndex]);
  }
  return newArr;
};


module.exports = middle;
     

   

  




