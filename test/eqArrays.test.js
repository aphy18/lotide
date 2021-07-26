const eqArrays = require('../eqArrays')
const assert = require('chai').assert;

describe("eqArrays function", () => {
    it("should return false if the lengths of two arrays are not equal", () => {
        assert.isFalse(eqArrays([1,2,3],[1,2,3,4]), false);
    });
});

