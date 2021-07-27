const chai = require('chai');
const assert = chai.assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2,3] from [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

