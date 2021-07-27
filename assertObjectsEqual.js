const eqObjects = function(object1, object2) {
    // if the lengths do not equal, return false
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (let key in object1) { 
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
    } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
  