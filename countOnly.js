function assertEqual(actual,expected){
    if(actual === expected){
        console.log('Assertion Passed:[actual] === [expected]')
    }

    else{
        console.log('Assertion Failed: [actual] !== [expected]')
    }
}

function countOnly(allItems,itemsToCount) {
  let results = {};
  allItems.forEach(name => {
  if(itemsToCount[name]) {
    if(results[name]) {
      results[name] += 1;
    } else {
      results[name] = 1;
    }
  }
});
    console.log(results);
   return results;
};

countOnly(["Muaz","Aphy","Rafee","Rafee","Abdi"],{ "Aphy": true, "Muaz": false, "Rafee": true, "Abdi": false });


