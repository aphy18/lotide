function assertEqual(actual,expected){
    if(actual === expected){
        console.log('Assertion Passed:[actual] === [expected]')
    }

    else{
        console.log('Assertion Failed: [actual] !== [expected]')
    }
}

function countOnly(allItems,itemsToCount){
    let results = {};
    // start by looping through the entire array
    allItems.forEach(name => {
        // first you gotta make sure the value is required to be found in itemsToCount, excludes the names that're not in the object
        if(itemsToCount[name]) {
        // while the value is in the results object, while it has more than 1 value to itself it will be counted
            if(results[name]) {
                results[name] += 1;
            }
        // otherwise they key num value will remain as 1, the only value that it has representing it
            else {
                results[name] = 1;
            }
        }
        
    });
    console.log(results)
   return results
}

countOnly(["Muaz","Aphy","Rafee","Rafee","Abdi"],{ "Aphy": true, "Muaz": false, "Rafee": true, "Abdi": false });


