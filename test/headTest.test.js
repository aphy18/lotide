// const head = require('../head')


// head(["Aphy","abdi","Rafee","Bonza"])


// note: the function will print out your results from both pages so be careful

const chai = require('chai');
const assert = chai.assert;
const head = require('../head');

describe("head function", () => {
  it("returns 1 from [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
   });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
}); 

  
// using node is different from using using npm



