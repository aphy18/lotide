const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail');
let test1 = tail([1, 2, 3]);

describe("tail function", () => {
  it("should return the tail of the function", () => {
     assert.deepEqual(test1, [2, 3]);
  });
});


  



