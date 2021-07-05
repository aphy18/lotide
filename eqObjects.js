const eqObjects = function(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (let key of Object.keys(obj1)) {
      if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])) {
        return false;
      }
  
      if (Array.isArray(obj1[key] && Array.isArray(obj2[key]))) {
        return eqArrays(obj1[key], obj2[key]);
      }
  
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  
  }
    
const ab = { a: "1", b: "3" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object