function assertEqual(actual,expected) {
    
    const fail = String.fromCodePoint(0x274C);
    const pass = String.fromCodePoint(0x274E)
    if(actual === expected){
        console.log(`${pass} Assertion Passed:[actual] === [expected]`)
    }
    
    else{
        console.log(`${fail} Assertion Failed: [actual] !== [expected]`)
    }
    
}


function findKeyByValue(object,value){
    for(key of Object.keys(object)){
        if(value === object[key]){
            console.log(key)
            return key;
        }
        
    }
}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")