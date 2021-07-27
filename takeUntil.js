function takeUntil(array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return array.slice(0,i);
        }
    }
};

function assertEqual(actual,expected) {
    
    const fail = String.fromCodePoint(0x274C);
    const pass = String.fromCodePoint(0x274E)
    if(actual === expected){
        console.log(`${pass} Assertion Passed:[actual] === [expected]`)
    } else {
        console.log(`${fail} Assertion Failed: [actual] !== [expected]`)
    }
    
};

const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results = takeUntil(data, x => x < 0);
console.log(results);

assertEqual(results,results)


