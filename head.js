function assertEqual(actual,expected){
    const pass = String.fromCodePoint(0x274C);
    const fail = String.fromCodePoint(0x274E)
    if(actual === expected){
        console.log(`${pass} Assertion Passed:[actual] === [expected]`)
    }

    else{
        console.log(`${fail} Assertion Failed: [actual] !== [expected]`)
    }
}


function head(array){
    if(array){
        console.log(array[0]);
    }

    else{
        console.log(undefined);
    }
}