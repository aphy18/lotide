function map(array,callback) {
  const results = [];
  array.map(item => {
    let myCallBack = callback(item);
    if (myCallBack) {
      results.push(callback(item));
    }
  });
  console.log(results);
  return results;
}

const whichFood = food => {
  if (food.length > 5) {
    return food;
  }
  return undefined;
}

map(["banana","potato","apple","steak","guananan"],whichFood)